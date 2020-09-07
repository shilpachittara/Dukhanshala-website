import React from 'react';
import './OrderDetails.css'
import { Link } from 'react-router-dom';
import backArror from '../../assets/images/icon_back.svg';


const OrderDetails = () =>(
    <div className="container mb-5 pb-5">
        <p className="mt-3 mb-4"><b><Link to="/"><img src={backArror} alt="" style={{marginRight:"15px"}} /></Link> Order Details</b></p>
        <h6 className="text-body mb-0">Order ID: 142247
        <span className="float-right"><i className="fas fa-circle pr-1 text-warning smallest-text"></i><span className="small-text pl-0 text-warning" style={{textTransform: "capitalize"}}>pending</span></span></h6>
        <h6 className="text-body mt-2 mb-3">30/08/2020, 20:02:56</h6>
        <Link to="/">Dukhan Shala</Link>
        <hr class="mt-13"/>
        <div>
            <h6 className="text-color-gray">
                <section className="section">
                    <span className="badge badge-primary mr-2">1</span>
                    <span className="text-primary" style={{textTransform: "capitalize"}}>Order pending</span>
                    <br/>
                    <span className="badge badge-secondary mt-3 mr-2">2</span>
                    <span>Shipping</span>
                    <br/>
                    <span className="badge badge-secondary mt-3 mr-2">3</span>
                    <span>Delivery</span>
                </section>
            </h6>
            <hr/>
            <h6 className="text-secondary mb-3">1 ITEM</h6>
            <div className="container">
                <div className="col-12 px-0">
                    <div className="row mt-1">
                        <div className="col-2 col-sm-1 p-0">
                            <div className="thumbnail-container thumbnail-padding">
                                <img src={"https://dukaan-api.1kg.me/static/images/category-def.jpg"} alt="" className="thumbnail rounded-xl" />
                            </div>
                        </div>
                        <div className="col-8 col-sm-9">
                            <h6 className="mb-0 text-dark">Mask</h6>
                            <p className="mt-2"><span className="btn bg-track-qty text-prime-sm">2</span> x ₹90</p>
                        </div>
                        <div className="col-2 mt-4 px-0"><p className="float-right mt-2">₹180</p></div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="d-md-none d-lg-none d-sm-block">
                <p className="mb-2">Item Total: <span className="float-right">₹180</span></p>
                <p>Delivery:<span className="float-right text-success">Free</span></p>
                <p><b>Grand Total: <span className="float-right">₹180</span></b></p>
            </div>
            <div className="d-none d-md-block d-lg-block p-3 bg-light">
                <p className="mb-2">Item Total: <span className="float-right">₹180</span></p>
                <p>Delivery:<span className="float-right text-success">Free</span></p>
                <p><b>Grand Total: <span className="float-right">₹180</span></b></p>
            </div>
            <hr/>
            <h6 className="small-text text-secondary mb-3">CUSTOMER'S DETAILS</h6>
            <div className="row">
                <p className="col-4 mb-1"><b>Name:</b></p><p className="col-8 mb-1">test</p>
                <p className="col-4 mb-1"><b>Mobile:</b></p><p className="col-8 mb-1">7982869410</p>
                <p className="col-4 mb-1"><b>Address:</b></p><p className="col-8 mb-1">sfsdg asd</p>
                <p className="col-4 mb-1"><b>Pin Code:</b></p><p className="col-8 mb-1">117898</p>
                <p className="col-4 mb-1"><b>City:</b></p><p className="col-8 mb-1">des</p>
                <p className="col-4 mb-1"><b>Payment:</b></p><p className="col-8 mb-1">COD</p>
            </div>
        </div>
    </div>
)

export default OrderDetails;