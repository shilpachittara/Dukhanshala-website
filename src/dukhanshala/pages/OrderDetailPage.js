import React, { Component } from 'react';
import OrderDetails from 'dukhanshala/components/order-details/OrderDetails';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';


class OrdersPage extends Component {
    render(){
      return(
        <div className="container">
          <Header />
            <OrderDetails/>
            <Footer/>
        </div>
      )
    }
  }
  
  export default OrdersPage