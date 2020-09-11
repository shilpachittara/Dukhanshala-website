import React from 'react';
import './OrderDetails.css'


const OrderDetails = () =>(
    <div className="text-center">
            <img src={successImg} style={{marginRight:"15px",width:"80px", height:"80px"}} alt="" />
            <h1 className="heading">Your Order is Confirmed!</h1>
            <p className="small-text text-secondary">You will receive a confirmation message as soon as the order is accepted.</p>
            <div className="">
                <button className="mb-5 btn btn-primary btn-lg" disabled="">Track Order</button>
            </div>
            </div>
)

export default OrderDetails;