import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import backArror from '../../assets/images/icon_back.svg';
import Validator from 'dukhanshala/util/Validator';
import firebaseConfig from '../../../configs/FirebaseConfig.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AppContext } from 'Context/AppContext';
class SendOtp extends React.Component {
  static contextType = AppContext;
  constructor() {
    super();
    this.state = {
      contact: null,
      confirmResult: null,
      countryCode: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitOtp = this.submitOtp.bind(this);
    this.validator = new Validator();
  }
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.submitOtp();
      }
    });
    this.getCountry();
  }

  getCountry(){

  }
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
  submitOtp() {
    if (this.validator.validateContact(this.state.contact)) {
      var appVerifier = window.recaptchaVerifier;
      var number = "+91" + this.state.contact;
      firebase.auth().signInWithPhoneNumber(number, appVerifier)
        .then(confirmResult => {
          this.setState({ confirmResult });
          this.context.updateConfirmResult(confirmResult);
          this.setState({ redirect: true });
        })
        .catch(error => {
          alert(error.message)
     
        });
    };

  
    this.context.updateMobileNumber(this.state.contact);

  }

  render() {
    const { redirect } = this.state

    if (redirect)
      return (<Redirect to={{
        pathname: `${this.context.storeCode}/${this.state.contact}/verify`
      }} />)
    return (
      <div className="container-fluid m-q-height">
        <h1 className="heading"><Link to={`${this.context.storeCode}/bag`}><img src={backArror} style={{ marginRight: "15px" }} alt="" /></Link> Orders</h1>
        <p className="mt-3 mb-0"><b>Mobile Verification</b></p>
        <p className="small-text">Please enter your 10 digit mobile number.</p>
        <div className="field">
          <input id="contact" type="number" className="form-control mobileInput input-lg" name="contact" placeholder="Mobile Number" required
            onChange={this.handleChange} />
          <p className="text-danger p-1"></p>
          <div>
            <button id="sign-in-button" className="mb-5 btn btn-primary btn-lg" onClick={this.submitOtp}>Send OTP</button>
          </div>
        </div>
        <div id="recaptcha" ></div>
      </div>

    )
  }

}

export default SendOtp;