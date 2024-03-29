import React from 'react';
import './MyOrders.css'
import { AppContext } from 'Context/AppContext';
import { Redirect } from 'react-router-dom';
import * as MyorderServices from '../../../services/MyordersServices'

class MyOrders extends React.Component {
    static contextType = AppContext;
    constructor() {
        super();

        this.state = {
            categories: null,
            textColour: "orange"
        }
        this.orderDetail = this.orderDetail.bind(this);
    }
    componentDidMount() {
        this.getOrdersByContactNumber();

    }

    setColor(status){
       
        if (status === "DECLINED" || status === "CANCELED") {
            return "red"
        }
        if (status === "DELIVERED") {
            return "green"
        }
        if (status === "PENDING" || status === "SHIPPED") {
            return "orange"
        }

    }

    getOrdersByContactNumber = async () => {
        let mobileNo = window.localStorage.getItem('userMobile')
        let response = await MyorderServices.getOrderList(mobileNo)
        try {
            if (response && response.data && response.data.orderDetails) {
                // this.props.setCategories(response.data.categories);
                this.setState({ categories: response.data.orderDetails });
            }
            this.setColorStatus(response.data.orderDetails)
        }
        catch (e) {
            alert(e)
        }
    };

    setColorStatus(orderDetails) {
        for (var i = 0; i < orderDetails.length; i++){
            orderDetails[i].color = this.setColor(orderDetails[i].status);
        }
        this.setState({ categories: orderDetails });
    }
    orderDetail(orderId) {
        this.context.updateOrderId(orderId);
        this.setState({ redirect: true })
    }

    render() {
        const { redirect } = this.state

        if (redirect)
            return (<Redirect to={{
                pathname: `${this.context.storeCode}/order/detail`
            }} />)
        return (
            <div className="container mb-5 pb-5">
                <p className="mt-3 mb-0"><b> My Orders</b></p>
                <p className="text-secondary">{this.context.mobile}</p>

                <div id="order_list" className="mt-4 pt-2"></div>
                {this.state.categories &&
                    this.state.categories.map((order, index) => (
                        <div key={index} >
                            <div className="row pr-0 pl-3" >
                                <div className="col-12 px-0 mb-2">
                                    <span>{order.storeName}</span>
                                </div>
                                <div className="col-2 col-sm-1 px-0">
                                    <div className="thumbnail-container thumbnail-padding">
                                        <img src={"https://dukaan-api.1kg.me/static/images/category-def.jpg"} alt="" className="thumbnail rounded-xl" />
                                    </div>
                                </div>
                                <div className="col-10 col-sm-11 vertical-parent">
                                    <div className="w-100">
                                        <p className="mb-1" style={{ fontSize: "14px", lineHeight: "20px" }}>Order #{order.orderId} <span className="float-right" style={{ fontSize: "15px", lineHeight: "22px" }}>₹{order.total}</span></p>
                                        <p className="mt-2 mb-0" style={{ fontSize: "12px", lineHeight: "12px" }}><span className="small-text">{order.quantity} item</span><span className="small-text float-right">{order.createdDate}</span></p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 small-text">
                                <i className="fas fa-circle pr-1 text-yellow smallest-text"></i>
                                <span className="pl-0" style={{ textTransform: "capitalize", color: order.color }}>{order.status}</span>
                                <span className="btn btn-outline-info float-right" style={{ marginTop: "-7px" }} onClick={this.orderDetail.bind(this, order.orderId)}>
                                    Detail
                                </span>
                            </p>
                            <hr className="mt-20"></hr>

                        </div>
                    ))}

            </div>
        )
    }
}

export default MyOrders;