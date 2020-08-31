import React, { Component } from 'react';
import backArror from '../assets/images/icon_back.svg';
import successImg from '../assets/images/success.svg';
import { Link } from 'react-router-dom';
import Checkout from 'dukhanshala/components/checkout/Checkout';
import MyOrders from 'dukhanshala/components/my-orders/MyOrders';
import OrderDetails from 'dukhanshala/components/order-details/OrderDetails';


class OrdersPage extends Component {
    render(){
      return(
        <div className="container">
          <h1 className="heading"><Link to="/"><img src={backArror} style={{marginRight:"15px"}} alt="" /></Link> Orders</h1>
            <p class="mt-3 mb-0"><b>Mobile Verification</b></p>
            <p class="small-text">Please enter your 10 digit mobile number.</p>
            <div className="field">
              <input type="number" className="form-control mobileInput input-lg" name="mobile" placeholder="Mobile Number" required="" />
              <p class="text-danger p-1"></p>
              <div>
                <button className="mb-5 btn btn-primary btn-lg" disabled="">Send OTP</button>
              </div>
            </div>

            <h1 className="heading"><Link to="/"><img src={backArror} style={{marginRight:"15px"}} alt="" /></Link> OTP Verification</h1>
            <p class="small-text text-secondary">Please enter the 4 digit OTP sent to your number - 1234567890.</p>
            <button className="btn btn-outline-info btn-sm">Resend OTP</button>
            <div className="field">
              <input type="text" id="otp" name="otp" placeholder=" " maxlength="4" required="" />
              <p id="api-error" class="text-danger p-3"></p>
              <div>
                <button className="mb-5 btn btn-primary btn-lg" disabled="">Verify OTP</button>
              </div>
            </div>

            <Checkout/>

            <div className="text-center">
            <img src={successImg} style={{marginRight:"15px",width:"80px", height:"80px;"}} alt="" />
            <h1 className="heading">Your Order is Confirmed!</h1>
            <p class="small-text text-secondary">You will receive a confirmation message as soon as the order is accepted.</p>
            <div className="">
                <button className="mb-5 btn btn-primary btn-lg" disabled="">Track Order</button>
            </div>
            </div>

            <MyOrders/>
            <OrderDetails/>
        </div>
      )
    }
  }
  
  export default OrdersPage