import React, { Component } from 'react';
import MyOrders from 'dukhanshala/components/my-orders/MyOrders';
import { Redirect } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';
import { Helmet } from 'react-helmet';


class OrdersPage extends Component {
  static contextType = AppContext;
    constructor(){
        super();
        this.state = {}
    }
    
    componentDidMount(){
      if(window.localStorage.getItem('userMobile') === null){
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
        <>
        <Helmet
          title="All Orders - Dukaanshala"
          meta={[
            { "name": "description", "content": "Place online orders and see the live menu for Home Delivery. Same day delivery | No minimum order" },
            { "name": "keywords", "content": "Online Store Dukaan" },
            /* link={[{ href: `${pageUrl}`, rel: "canonical" }]}
            { "name": "twitter:card", "content": "summary_large_image" },
            { "name": "twitter:site", "content": "@supplycovid" },
            { "name": "twitter:creator", "content": "@supplycovid" },
            { "name": "twitter_title", "content": "Take your store online with Dukaanshala, India ka apna Online store, Bahi Khata, Ledger Account Book & Digital Store App | Dukaanshala" },
            { "name": "twitter_description", "content": "Take your store online with Dukaanshala, India ka apna Online store, Bahi Khata, Ledger Account Book & Digital Store App | Dukaanshala" },
            */{ property: "og:type", content: "product" },
            { property: "og:title", content: "All Orders - Dukaanshala" },
            { property: "og:description", content: "Take your store online with Dukaanshala, India ka apna Online store, Bahi Khata, Ledger Account Book & Digital Store App | Dukaanshala" },
            { property: "og:url", content: "https://www.dukaanshala.com" },
            { property: "og:image", content: "https://www.dukaanshala.com/logo2.png" }
          ]}
          />
        <div className="container">
          <Header />
          <div className="m-q-min-height">
            <MyOrders/>
            </div>
            <Footer/>
        </div>
        </>
      )
    }
  }
  
  export default OrdersPage