import React, { Component } from 'react';
import backArror from '../assets/images/icon_back.svg';
import { Link } from 'react-router-dom';


class OrdersPage extends Component {
    render(){
      return(
        <div className="container">
          <h1 className="heading"><Link to="/"><img src={backArror} style={{marginRight:"15px"}} /></Link> Orders</h1>
            <p class="mt-3 mb-0"><b>Mobile Verification</b></p>
            <p class="small-text">Please enter your 10 digit mobile number.</p>
            <div className="field">
              <input type="number" className="form-control mobileInput input-lg" name="mobile" placeholder="Mobile Number" required="" />
              <p class="text-danger p-1"></p>
              <div>
                <button className="mb-5 btn btn-primary btn-lg" disabled="">Send OTP</button>
              </div>
            </div>
        </div>
      )
    }
  }
  
  export default OrdersPage