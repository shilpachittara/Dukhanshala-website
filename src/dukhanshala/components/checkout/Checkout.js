import React from 'react';
import './Checkout.css'
import { Link } from 'react-router-dom';
import backArror from '../../assets/images/icon_back.svg';


const Checkout = () =>(
    <div>
        <p class="mt-3 mb-0"><b><Link to="/"><img src={backArror} style={{marginRight:"15px"}} alt="" /></Link> Checkout</b></p>
        <p class="text-secondary">Payment of ₹400.00</p>

        <div className="row">
            <div className="col-12 col-lg-8 mt-3">
                <div className="form-group">
                    <label for="customer_name" className="float">Name</label>
                    <input type="text" id="" name="customer_name" placeholder=" " required="" className="form-control" />
                </div>
            </div>
            <div className="col-12 col-lg-8">
                <div className="form-group">
                    <label for="customer_name" className="float">Address</label>
                    <input type="text" id="" name="customer_name" placeholder=" " required="" className="form-control" />
                </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-6 col-lg-4">
                <div className="form-group">
                    <label for="customer_name" className="float">City</label>
                    <input type="text" id="" name="customer_name" placeholder=" " required="" className="form-control" />
                </div>
            </div>            
            <div className="col-6 col-lg-4">
                <div className="form-group">
                    <label for="customer_name" className="float">Pincode</label>
                    <input type="text" id="" name="customer_name" placeholder=" " required="" className="form-control" />
                </div>
            </div>            
        </div>
        <p class="small-text mt-3 pt-3 mb-0">PAYMENT METHOD</p>
        <div className="custom-control custom-radio custom-control-inline mt-3 mb-3">
            <input type="radio" id="cod" name="cod" className="custom-control-input" checked="checked" />
            <label className="custom-control-label" for="cod" style={{paddingTop: "2px"}}>Cash/UPI on Delivery</label></div>
        <div className="mb-5">
            <button className="mb-5 btn btn-primary btn-lg" >Place Order</button>
        </div>        
    </div>
)

export default Checkout;