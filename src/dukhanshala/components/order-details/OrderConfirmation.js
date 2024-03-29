import React from 'react';
import './OrderDetails.css'
import successImg from '../../assets/images/success.svg';
import { Link } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';

class OrderDetails extends React.Component{
    static contextType = AppContext;
    constructor(){
        super();

        this.state = {
        }
    }
    componentDidMount() {
    }

    render(){
        return(
    <div className="text-center" style={{marginTop:'50px'}}>
            <img src={successImg} style={{marginRight:"15px",width:"80px", height:"80px"}} alt="" />
            <h1 className="heading">Your Order is Confirmed!</h1>
            <p className="small-text text-secondary">You will receive a confirmation message as soon as the order is accepted.</p>
            <div className="">
                <button style={{backgroundColor:'rgb(59, 179, 166)'}} className="mb-5 btn  btn-lg"><Link to={`${this.context.storeCode}/orders`} style={{color:'white'}}>Track Order</Link></button>
            </div>
            </div>
)
        }}
export default OrderDetails;