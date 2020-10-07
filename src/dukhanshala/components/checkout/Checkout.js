import React ,{ useRef }from 'react';
import './Checkout.css'
import { Link, Redirect } from 'react-router-dom';
import backArror from '../../assets/images/icon_back.svg';
import { AppContext } from 'Context/AppContext';
import Validator from 'dukhanshala/util/Validator';
import ObjectCreation from 'dukhanshala/util/ObjectCreation';
import Axios from 'axios';
import https from 'https';

class Checkout extends React.Component {
    static contextType = AppContext;
    constructor() {
        super();

        this.state = {
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
            totalItem: null
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validator = new Validator();
        this.objectCreation = new ObjectCreation();
    }
    componentDidMount() {
        this.setState({ contact: this.context.mobile });
        this.setState({ storeCode:this.context.storeCode });
        this.setState({ deliveryCharge: this.context.deliveryCharge });
        this.setState({ grandTotal: this.context.grandTotal });
        this.setState({ totalItem: this.context.bagCount });
        this.setState({ total: this.context.total });
        this.setState({ bag: this.context.bag });
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    
    submit() {
        
        if (this.validator.validateAddress(this.state)) {
         
            let request = this.objectCreation.orderObject(this.state);
  
            const agent = new https.Agent({
                rejectUnauthorized: false,
            });
            Axios.post('http://35.240.173.248:8000/web/order', request, { httpsAgent: agent })
                .then(res => {
                   
                    this.setState({ redirect: true });
                    this.context.updateBagCount(0);
                })

        }
      
    }

    render() {
        const { redirect } = this.state
        if (redirect)
            return (<Redirect to={{
                pathname: `${this.context.storeCode}/confirmation`
            }} />)
        return (
            <div>
                {/* <p className="mt-3 mb-0"><b><Link to={`${this.context.storeCode}/bag`}><img src={backArror} style={{ marginRight: "15px" }} alt="" /></Link> Checkout</b></p>
                <p className="text-secondary">Payment of ₹{this.context.grandTotal}</p> */}

                <div id="ourVision" className="row">
                    <div className="col-12 col-lg-8 mt-3">
                        <div className="form-group">
                            <label htmlFor="customer_name" className="float">Name</label>
                            <input type="text" id="name" name="name" placeholder=" " required="" className="form-control" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="form-group">
                            <label htmlFor="customer_name" className="float">Address</label>
                            <input type="text" id="address" name="address" placeholder=" " required="" className="form-control" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-6 col-lg-4">
                        <div className="form-group">
                            <label htmlFor="customer_name" className="float">City</label>
                            <input type="text" id="city" name="city" placeholder=" " required="" className="form-control" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="col-6 col-lg-4">
                        <div className="form-group">
                            <label htmlFor="customer_name" className="float">Pincode</label>
                            <input type="number" id="pincode" name="pincode" placeholder=" " required="" className="form-control" onChange={this.handleChange} />
                        </div>
                    </div>
                </div>
                <p className="small-text mt-1  mb-0">PAYMENT METHOD</p>
                <div className="custom-control custom-radio custom-control-inline mt-3 mb-3" style={{paddingBottom:'110px'}}>
                    <input type="radio" id="cod" name="cod" className="custom-control-input" onChange={this.handleChange} checked={true}/>
                    <label className="custom-control-label" htmlFor="cod" style={{ paddingLeft: '20px' }}>Cash/UPI on Delivery</label></div>
                    <div className="mb-5 fixed-bottom " style={{marginTop:'20px',paddingBottom:'15px',marginLeft:'10px',marginRight:'10px'}}>
                    <button href="#ourVision" className="btn  btn-lg btn-block text-white" style={{backgroundColor:'rgb(59, 179, 166)'}} onClick={this.submit}>Place Order</button>
                </div>
            
            </div>
        )
    }
}
export default Checkout;