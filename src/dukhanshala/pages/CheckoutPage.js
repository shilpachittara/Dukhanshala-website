import React, { Component } from 'react';
import Checkout from 'dukhanshala/components/checkout/Checkout';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';
import { Helmet } from 'react-helmet';


class OrdersPage extends Component {
    render(){
      return(
        <>
        <Helmet
          title="Place your order - Dukaanshala"
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
            { property: "og:title", content: "Place your order - Dukaanshala" },
            { property: "og:description", content: "Take your store online with Dukaanshala, India ka apna Online store, Bahi Khata, Ledger Account Book & Digital Store App | Dukaanshala" },
            { property: "og:url", content: "https://www.dukaanshala.com" },
            { property: "og:image", content: "https://www.dukaanshala.com/logo2.png" }
          ]}/>
        <div className="container">
          <Header />
            <Checkout/>
            <Footer />
        </div>
        </>
      )
    }
  }
  
  export default OrdersPage