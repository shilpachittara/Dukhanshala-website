import React from 'react';
import './Checkout.css'
import { Link, Redirect } from 'react-router-dom';
import backArror from '../../assets/images/icon_back.svg';
import { AppContext } from 'Context/AppContext';


class Checkout extends React.Component{
    static contextType = AppContext;
    constructor(){
        super();

        this.state = {
        }
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
    }

    submit(){
        this.setState({redirect: true})
    }

    render(){
        const { redirect } = this.state
        if (redirect)
            return (<Redirect to={{
                pathname: `${this.context.storeCode}/confirmation`
            }} />)
        return(
    <div>
        <p className="mt-3 mb-0"><b><Link to={`${this.context.storeCode}/bag`}><img src={backArror} style={{marginRight:"15px"}} alt="" /></Link> Checkout</b></p>
        <p className="text-secondary">Payment of ₹400.00</p>

        <div className="row">
            <div className="col-12 col-lg-8 mt-3">
                <div className="form-group">
                    <label htmlFor="customer_name" className="float">Name</label>
                    <input type="text" id="name" name="customer_name" placeholder=" " required="" className="form-control" />
                </div>
            </div>
            <div className="col-12 col-lg-8">
                <div className="form-group">
                    <label htmlFor="customer_name" className="float">Address</label>
                    <input type="text" id="address" name="customer_name" placeholder=" " required="" className="form-control" />
                </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-6 col-lg-4">
                <div className="form-group">
                    <label htmlFor="customer_name" className="float">City</label>
                    <input type="text" id="city" name="customer_name" placeholder=" " required="" className="form-control" />
                </div>
            </div>            
            <div className="col-6 col-lg-4">
                <div className="form-group">
                    <label htmlFor="customer_name" className="float">Pincode</label>
                    <input type="text" id="pincode" name="customer_name" placeholder=" " required="" className="form-control" />
                </div>
            </div>            
        </div>
        <p className="small-text mt-3 pt-3 mb-0">PAYMENT METHOD</p>
        <div className="custom-control custom-radio custom-control-inline mt-3 mb-3">
            <input type="radio" id="cod" name="cod" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="cod" style={{paddingTop: "2px"}}>Cash/UPI on Delivery</label></div>
        <div className="mb-5">
            <button className="mb-5 btn btn-primary btn-lg" onClick={this.submit}>Place Order</button>
        </div>        
    </div>
)
        }
    }
export default Checkout;