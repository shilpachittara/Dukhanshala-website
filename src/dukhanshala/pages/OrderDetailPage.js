import React, { Component } from 'react';
import OrderDetails from 'dukhanshala/components/order-details/OrderDetails';


class OrdersPage extends Component {
    render(){
      return(
        <div className="container">
            <OrderDetails/>
        </div>
      )
    }
  }
  
  export default OrdersPage