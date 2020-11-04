import React from 'react';
import './OrderDetails.css'
import { Link, Redirect } from 'react-router-dom';
import backArror from '../../assets/images/icon_back.svg';
import { AppContext } from 'Context/AppContext';
import * as MyorderServices from '../../../services/MyordersServices'
class OrderDetails extends React.Component {
    static contextType = AppContext;
    constructor() {
        super();

        this.state = {
            order: {},
            redirect: false,
            pending : "badge badge-secondary mt-3 mr-2",
            shipped : "badge badge-secondary mt-3 mr-2",
            delivery : "badge badge-secondary mt-3 mr-2",
            pendingText : null,
            shippedText : null,
            deliveryText : null,
            pendingTextTransform : null,
            shippedTextTransform : null,
            deliveryTextTransform : null,
            color : "orange"
        }
        this.backPage = this.backPage.bind(this)
    }
    componentDidMount() {
        this.getOrdersByContactNumber();
    }
    getOrdersByContactNumber = async() => {
        if(this.context.orderId!==null){
            localStorage.setItem('orderId',this.context.orderId)
        }

        let response = await MyorderServices.getOrderDetail(this.context.orderId === null? localStorage.getItem('orderId'):this.context.orderId)
        try {
            if (response && response.data) {
                this.setState({ order: response.data });
                this.setColor(response.data);
                this.setStatusColor(response.data);
            }
        
        }
        catch (e) {
            alert(e)
        }


    };

    setColor(order){
       var status = order.status;
       console.log(status);
        if (status === "DECLINED" || status === "CANCELED") {
            console.log("check");
            this.setState({color : "red" })
        }
        if (status === "DELIVERED") {
            this.setState({color : "green" })
        }
        if (status === "PENDING" || status === "SHIPPED") {
            this.setState({color : "orange" })
        }

    }
    setStatusColor(order) {
        var text = "text-primary"
        var digit = "badge badge-primary mr-2"
        var trans = "capitalize"
        if (order.status === "DELIVERED") {
            this.setState({ pendingText: text });
            this.setState({ shippedText: text });
            this.setState({ deliveryText: text });
            this.setState({ pending: digit });
            this.setState({ shipped: digit });
            this.setState({ delivery: digit });
            this.setState({ pendingTextTransform: trans });
            this.setState({ shippedTextTransform: trans });
            this.setState({ deliveryTextTransform: trans });
        }
        if (order.status  === "PENDING"){
            this.setState({ pendingText: text});
            this.setState({ pending: digit });
            this.setState({ pendingTextTransform: trans });
        }
        if( order.status === "SHIPPED") {
            this.setState({ pendingText: text });
            this.setState({ shippedText: text });
            this.setState({ pending: digit });
            this.setState({ shipped: digit });
            this.setState({ pendingTextTransform: trans });
            this.setState({ shippedTextTransform: trans });
        }
    }
    backPage() {
        this.setState({ redirect: true })
    }
    render() {


        if (this.state.redirect)
            return (<Redirect to={{
                pathname: `${this.context.storeCode}/orders`
            }} />)
        return (
            <div className="container mb-5 pb-5">
                <p className="mt-3 mb-4"><b><img src={backArror} alt="" style={{ marginRight: "15px" }} onClick={this.backPage} />Order Details</b></p>
                <h6 className="text-body mb-0">Order ID: {this.state.order.orderId}
                    <span className="float-right"><i className="fas fa-circle pr-1 text-warning smallest-text"></i>
                    <span className="small-text pl-0" style={{ textTransform: "capitalize" , color: `${this.state.color}` }}>{this.state.order.status}</span>
                    </span></h6>
                <h6 className="text-body mt-2 mb-3">{this.state.order.createdDate}</h6>
                <Link to="/">{this.state.order.storeName}</Link>
                <hr className="mt-13" />
                <div>
                    <h6 className="text-color-gray">
                        <section className="section">
                            <span className={this.state.pending}>1</span>
                            <span className={this.state.pendingText} style={{ textTransform: `${this.state.pendingTextTransform}` }}>Order pending</span>
                            <br />
                            <span className={this.state.shipped}>2</span>
                            <span className={this.state.shippedText} style={{ textTransform: `${this.state.shippedTextTransform}` }}>Shipping</span>
                            <br />
                            <span className={this.state.delivery} >3</span>
                            <span className={this.state.deliveryText} style={{ textTransform: `${this.state.deliveryTextTransform}` }}>Delivery</span>
                        </section>
                    </h6>
                    <hr />
                    <h6 className="text-secondary mb-3">{this.state.order.orderQuantity} ITEM</h6>
                    {this.state.order.products &&
                        this.state.order.products.map((product, index) => (
                            <div className="container" key={index}>
                                <div className="col-12 px-0">
                                    <div className="row mt-1">
                                        <div className="col-2 col-sm-1 p-0">
                                            <div className="thumbnail-container thumbnail-padding">
                                                <img src={product.productImage} alt="" className="thumbnail rounded-xl" />
                                            </div>
                                        </div>
                                        <div className="col-8 col-sm-9">
                                            <h6 className="mb-0 text-dark">{product.productName}</h6>
                                            <p className="mt-2"><span className="btn bg-track-qty text-prime-sm">{product.itemQuantity}</span> x ₹{product.itemCost}</p>
                                        </div>
                                        <div className="col-2 mt-4 px-0"><p className="float-right mt-2">₹{product.itemQuantity * product.itemCost}</p></div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}


                    {/*<div className="d-md-none d-lg-none d-sm-block">
                        <p className="mb-2">Item Total: <span className="float-right">₹{this.state.order.orderValue}</span></p>
                        <p>Delivery:<span className="float-right text-success">{this.state.order.deliveryFee}</span></p>
                        <p><b>Grand Total: <span className="float-right">₹{this.state.order.deliveryFee}</span></b></p>
                        </div>*/}
                    <div className="d-md-block d-lg-block p-3 bg-light">
                        <p className="mb-2">Item Total: <span className="float-right">₹{this.state.order.orderValue}</span></p>
                        <p>Delivery:<span className="float-right text-success">{this.state.order.deliveryFee}</span></p>
                        <p><b>Grand Total: <span className="float-right">₹{this.state.order.grandTotal}</span></b></p>
                    </div>
                    <hr />
                    <h6 className="small-text text-secondary mb-3">CUSTOMER'S DETAILS</h6>
                    <div className="row">
                        <p className="col-4 mb-1"><b>Name:</b></p><p className="col-8 mb-1">{this.state.order.customerName}</p>
                        <p className="col-4 mb-1"><b>Mobile:</b></p><p className="col-8 mb-1">{this.state.order.customerMobile}</p>
                        <p className="col-4 mb-1"><b>Address:</b></p><p className="col-8 mb-1">{this.state.order.address}</p>
                        <p className="col-4 mb-1"><b>Pin Code:</b></p><p className="col-8 mb-1">{this.state.order.pincode}</p>
                        <p className="col-4 mb-1"><b>City:</b></p><p className="col-8 mb-1">{this.state.order.city}</p>
                        <p className="col-4 mb-1"><b>Payment:</b></p><p className="col-8 mb-1">{this.state.order.paymentMode}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderDetails;