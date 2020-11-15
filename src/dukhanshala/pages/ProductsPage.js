import React, { Component } from 'react';
// import CompanyInfo from '../components/companyInfo/CompanyInfo';
import Products from '../components/products/Products';
import { AppContext } from 'Context/AppContext';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';


class ProductsPage extends Component {
  static contextType = AppContext;
    render(){
      return(
        <>
        <Helmet
          title="Buy Product - Dukaanshala"
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
            { property: "og:title", content: "Buy Product - Dukaanshala" },
            { property: "og:description", content: "Take your store online with Dukaanshala, India ka apna Online store, Bahi Khata, Ledger Account Book & Digital Store App | Dukaanshala" },
            { property: "og:url", content: "https://www.dukaanshala.com" },
            { property: "og:image", content: "https://www.dukaanshala.com/logo2.png" }
          ]}
         />
        <div>
          <Header />
          <section className="container CategoriesPage m-q-min-height">
          <h3 className="heading">{this.context.categoryName}</h3> 
            <h2 className="heading">Products</h2>          
              <Products/>
          </section>   
          {/* <section>
            <CompanyInfo/> 
          </section>   */}
          <Footer/> 
        </div>
        </>
      )
    }
  }
  
  export default ProductsPage