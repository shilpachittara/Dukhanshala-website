import React from 'react';
import './MyOrders.css'
import { Link } from 'react-router-dom';
import backArror from '../../assets/images/icon_back.svg';


const MyOrders = () =>(
    <div className="container mb-5 pb-5">
        <p className="mt-3 mb-0"><b><Link to="/"><img src={backArror} style={{marginRight:"15px"}} alt="" /></Link> My Orders</b></p>
        <p className="text-secondary">1234567890</p>

        <div id="order_list" className="mt-4 pt-2"></div>

        <div>
            <div className="row pr-0 pl-3">
                <div className="col-12 px-0 mb-2">
                    <Link to="/">Dukhan Shala</Link>
                </div>
                <div className="col-2 col-sm-1 px-0">
                    <div className="thumbnail-container thumbnail-padding">
                        <img src={"https://dukaan-api.1kg.me/static/images/category-def.jpg"} alt="" className="thumbnail rounded-xl" />
                    </div>
                </div>
                <div className="col-10 col-sm-11 vertical-parent">
                    <div className="w-100">
                        <p className="mb-1" style={{fontSize: "14px", lineHeight: "20px"}}>Order #142247 <span className="float-right" style={{fontSize: "15px", lineHeight: "22px"}}>₹180</span></p>
                        <p className="mt-2 mb-0" style={{fontSize: "12px", lineHeight: "12px"}}><span className="small-text">1 item</span><span className="small-text float-right">30/08/2020, 20:02:56</span></p>
                    </div>
                </div>
            </div>
            <p className="mt-3 small-text">
                <i className="fas fa-circle pr-1 text-yellow smallest-text"></i>
                <span className="pl-0 text-warning" style={{textTransform: "capitalize"}}>pending</span>
                <span className="btn btn-outline-primary float-right " style={{marginTop: "-7px"}}>
                    Detail 
                </span>
            </p>
            <hr className="mt-20"></hr>
        </div>

    </div>
)

export default MyOrders;