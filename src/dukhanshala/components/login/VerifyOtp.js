import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import backArror from '../../assets/images/icon_back.svg';
import { AppContext } from 'Context/AppContext';
import firebase from 'firebase/app';
import 'firebase/auth';
import Axios from 'axios';
import https from 'https';
import ObjectCreation from 'dukhanshala/util/ObjectCreation';
import * as Auth from '../../../services/AuthService'
import * as OrderService from '../../../services/BagpageServices'

class VerifyOtp extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);

    this.state = {
      updateBag: {
        "products": []
      },
      otp: null,
      confirmResult: [],
      mobile: null,
      bag: {},
      name: null,
      address: null,
      city: null,
      pincode: null,
      cod: null,
      contact: null,
      storeCode: null,
      deliveryCharge: null,
      grandTotal: null,
      total: null,
      totalItem: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.verify = this.verify.bind(this);
    this.loginDetail = this.loginDetail.bind(this);
    this.resend = this.resend.bind(this);
    this.objectCreation = new ObjectCreation();
  }
  componentDidMount() {
    this.setState({ confirmResult: this.context.confirmResult });
    this.setState({ contact: window.localStorage.getItem('userMobile') });
    this.setState({ mobile: this.context.mobile });
    this.setState({ storeCode: this.context.storeCode });
    this.setState({ deliveryCharge: this.context.deliveryCharge });
    this.setState({ grandTotal: this.context.grandTotal });
    this.setState({ totalItem: this.context.bagCount });
    this.setState({ total: this.context.total });
    this.setState({ bag: this.context.bag });
    this.setState({ name: this.context.name });
    this.setState({ address: this.context.address });
    this.setState({ city: this.context.city });
    this.setState({ pincode: this.context.pincode });
    this.setState({ cod: this.context.cod });
    //this.login();
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('resend-recaptcha', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // this.resend();
      }
    });
  }

  handleChange({ target }) {
    this.setState({
      otp: target.value
    });
  }

  verify() {
    var call = false;
    this.state.confirmResult.confirm(this.state.otp).then(result => {
      this.loginDetail();
    }).catch(function (error) {
      alert(error.message)

    });
    if (call) {
      this.loginDetail();
    }
  }

  loginDetail = async () => {
    let resp = await Auth.login(this.context.mobile)
    try {
      localStorage.setItem('userMobile', this.context.mobile)

      //order  api called
      let request = this.objectCreation.orderObject(this.state);


      let response = await OrderService.orderProduct(request)
      try {
        this.setState({ redirect: true });
        this.context.updateBagCount(0);
        this.context.updateBag(this.state.updateBag);
      }
      catch (e) {
        alert(e)
      }


    }
    catch (e) {
      alert(e)
    }


  }

  resend() {
    var appVerifier = window.recaptchaVerifier;
    var number = "+91" + this.state.mobile;
    this.setState({
      otp: ''
    });
    firebase.auth().signInWithPhoneNumber(number, appVerifier)
      .then(confirmResult => {
        this.setState({ confirmResult });
      })
      .catch(error => {
        alert(error.message)

      });

  }

  render() {
    const { redirect } = this.state

    if (redirect)
      return (<Redirect to={{
        pathname: `${this.context.storeCode}/confirmation`
      }} />)
    return (
      <div className="container">
        <h1 className="heading"><Link to={`${this.context.storeCode}/otp`}><img src={backArror} style={{ marginRight: "15px" }} alt="" /></Link> OTP Verification</h1>
        <p className="small-text text-secondary">Please enter the 6 digit OTP sent to your number - {this.context.mobile}</p>
        <button className="btn btn-outline-info btn-sm" onClick={this.resend}>Resend OTP</button>
        <div className="field">
          <input type="text" value={this.state.otp} id="otp" name="otp" placeholder=" " maxLength="6" required="" onChange={this.handleChange} />
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