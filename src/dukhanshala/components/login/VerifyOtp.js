import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import backArror from '../../assets/images/icon_back.svg';
import { AppContext } from 'Context/AppContext';
import firebase from 'firebase/app';
import 'firebase/auth';
import Axios from 'axios';
class VerifyOtp extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);

    this.state = {
      otp: null,
      confirmResult: [],
      mobile: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.verify = this.verify.bind(this);
    this.loginDetail = this.loginDetail.bind(this);
    this.resend = this.resend.bind(this);
  }
  componentDidMount() {
    this.setState({ confirmResult: this.context.confirmResult });
    this.setState({ mobile: this.context.mobile })
    //this.login();
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('resend-recaptcha', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.resend();
      }
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  verify() {
    var call = false;
    this.state.confirmResult.confirm(this.state.otp).then(result => {
      this.loginDetail();
    }).catch(function (error) {
      alert(error.message)
      console.log(error)
    });
    if (call) {
      this.loginDetail();
    }
  }

  loginDetail() {
    Axios.post(`http://35.240.173.248:8005/web/login/${this.context.mobile}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({ redirect: true });
      })
  }

  resend() {
    var appVerifier = window.recaptchaVerifier;
    var number = "+91" + this.state.mobile;
    firebase.auth().signInWithPhoneNumber(number, appVerifier)
      .then(confirmResult => {
        this.setState({ confirmResult });
        console.log(confirmResult)
      })
      .catch(error => {
        alert(error.message)
        console.log(error)
      });

  }

  render() {
    const { redirect } = this.state

    if (redirect)
      return (<Redirect to={{
        pathname: `${this.context.storeCode}/checkout`
      }} />)
    return (
      <div className="container">
        <h1 className="heading"><Link to={`${this.context.storeCode}/bag`}><img src={backArror} style={{ marginRight: "15px" }} alt="" /></Link> OTP Verification</h1>
        <p className="small-text text-secondary">Please enter the 6 digit OTP sent to your number - {this.context.mobile}</p>
        <button className="btn btn-outline-info btn-sm" onClick={this.resend}>Resend OTP</button>
        <div className="field">
          <input type="text" id="otp" name="otp" placeholder=" " maxLength="6" required="" onChange={this.handleChange} />
          <p id="api-error" className="text-danger p-3"></p>
          <div>
            <button id="resend-button" className="mb-5 btn btn-primary btn-lg" onClick={() => this.verify()}>Verify OTP</button>
          </div>
        </div>
        <div id="resend-recaptcha"></div>
      </div>
    )
  }

}

export default VerifyOtp;