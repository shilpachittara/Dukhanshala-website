import React, { Component } from 'react';
import OrderConfirmation from 'dukhanshala/components/order-details/OrderConfirmation';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';


class OrderConfirmPage extends Component {
    render(){
      return(
        <div className="container">
          <Header />
          <div className="m-q-min-height">
            <OrderConfirmation/>
            </div>
            <Footer />
        </div>
      )
    }
  }
  
  export default OrderConfirmPage