import React, { Component } from 'react';
import OrderConfirmation from 'dukhanshala/components/order-details/OrderConfirmation';


class OrderConfirmPage extends Component {
    render(){
      return(
        <div className="container">
            <OrderConfirmation/>
        </div>
      )
    }
  }
  
  export default OrderConfirmPage