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
            updateBag : {
                "products":[]
            },
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
            totalItem: null,
            redirectLogin:false
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validator = new Validator();
        this.objectCreation = new ObjectCreation();
    }
    componentDidMount() {
        this.setState({ contact: window.localStorage.getItem('userMobile')});
        this.setState({ storeCode:this.context.storeCode });
        this.setState({ deliveryCharge: this.context.deliveryCharge });
        this.setState({ totalItem: this.context.bagCount });
        this.setState({ bag: this.context.bag });
        this.totalCalculation();

    }

    totalCalculation(){
        var totalOrder=0;
        var grandTotal=0;
        var delivery = this.context.minFreeDelivery;
          var length = this.context.bag.products.length;
          for (var i = 0; i < length; i++) {
            if(this.context.bag.products[i]){
            totalOrder += this.context.bag.products[i].count* this.context.bag.products[i].sellingPrice;
          }
        }
        if(totalOrder >= delivery){
          grandTotal = totalOrder;
        }
        else{
          delivery = this.context.deliveryCharge;
          grandTotal = delivery + totalOrder;
        }
        this.setState({total: totalOrder});
        this.setState({grandTotal: grandTotal});
        this.setState({deliveryCharge: delivery});
      }
    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    
    submit() {
        const userVerified = window.localStorage.getItem('userMobile')


        if (this.validator.validateAddress(this.state)) {
            this.context.updateName(this.state.name)
            this.context.updateAddress(this.state.address)
         
            this.context.updateCity(this.state.city)
            this.context.updatePincode(this.state.pincode)
            this.context.updateCod(this.state.cod)
           
        if(userVerified != null){
          
         
                let request = this.objectCreation.orderObject(this.state);
                // console.log('request bag',request)
                const agent = new https.Agent({
                    rejectUnauthorized: false,
                    
                });
                Axios.post('http://35.240.173.248:8000/web/order', request, { httpsAgent: agent })
                    .then(res => {
                       
                        this.setState({ redirect: true });
                        this.context.updateBagCount(0);
                        this.context.updateBag(this.state.updateBag);
                    })
    
            }
            else{
                this.setState({redirectLogin: true})
              }
        }
      
        
   
      
    }

    render() {
        const { redirect } = this.state
        if (redirect)
            return (<Redirect to={{
                pathname: `${this.context.storeCode}/confirmation`
            }} />)
           else if (this.state.redirectLogin)
            return (<Redirect to={{
                pathname: `${this.context.storeCode}/otp`
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