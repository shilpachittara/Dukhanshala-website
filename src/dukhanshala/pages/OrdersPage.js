import React, { Component } from 'react';
import MyOrders from 'dukhanshala/components/my-orders/MyOrders';


class OrdersPage extends Component {
    render(){
      return(
        <div className="container">
            <MyOrders/>
        </div>
      )
    }
  }
  
  export default OrdersPage