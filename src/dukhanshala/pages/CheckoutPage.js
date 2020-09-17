import React, { Component } from 'react';
import Checkout from 'dukhanshala/components/checkout/Checkout';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';


class OrdersPage extends Component {
    render(){
      return(
        <div className="container">
          <Header />
            <Checkout/>
            <Footer />
        </div>
      )
    }
  }
  
  export default OrdersPage