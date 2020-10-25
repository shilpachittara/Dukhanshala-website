import React, { Component } from 'react';
import OrderDetails from 'dukhanshala/components/order-details/OrderDetails';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';
import { Helmet } from 'react-helmet';


class OrdersPage extends Component {
    render(){
      return(
        <>
        <Helmet
          title="Order detail - Dukaanshala"
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
            { property: "og:title", content: "Order detail - Dukaanshala" },
            { property: "og:description", content: "Take your store online with Dukaanshala, India ka apna Online store, Bahi Khata, Ledger Account Book & Digital Store App | Dukaanshala" },
            { property: "og:url", content: "https://www.dukaanshala.com" },
            { property: "og:image", content: "https://www.dukaanshala.com/logo2.png" }
          ]}
          script={[
            {
              type: "application/ld+json", innerHTML:
                `{ "@context": "http://schema.org",
                                   "@type": "Product",
                                   "name": "Order Online from Dukaanshala",
                                   "url": "https://www.dukaanshala.com",
                                   "logo": "https://www.dukaanshala.com/logo2.png",
                                   "description": "Buy original & quality checked personal protective equipment (PPE kits), N95 masks, Nitrile gloves, Face shields and other essential supplies",
                                }`
            }
          ]} />
        <div className="container">
          <Header />
            <OrderDetails/>
            <Footer/>
        </div>
        </>
      )
    }
  }
  
  export default OrdersPage