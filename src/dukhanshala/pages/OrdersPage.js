import React, { Component } from 'react';
import MyOrders from 'dukhanshala/components/my-orders/MyOrders';
import { Redirect } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';


class OrdersPage extends Component {
  static contextType = AppContext;
    constructor(){
        super();
        this.state = {}
    }
    
    componentDidMount(){
      if(this.context.mobile == null){
        this.setState({redirect: true})
      }
    }
    render(){
      const { redirect } = this.state

      if (redirect)
          return (<Redirect to={{
              pathname: `${this.context.storeCode}/otp`
          }} />)
      return(
        <div className="container">
          <Header />
            <MyOrders/>
            <Footer/>
        </div>
      )
    }
  }
  
  export default OrdersPage