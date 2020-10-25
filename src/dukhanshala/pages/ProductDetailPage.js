import React, { Component } from 'react';
import ProductDetail from '../components/product-detail/ProductDetail';
import backArror from '../assets/images/icon_back.svg';
import { Redirect } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import Axios from 'axios';
import https from 'https';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';
import { Helmet } from 'react-helmet';

class ProductDetailPage extends Component {

  static contextType = AppContext;
  constructor(){
      super();

      this.state = {
        categoryName: null
      }
      this.backPage = this.backPage.bind(this)
  }

  componentDidMount() {
    var path;


    if(this.context.storeCode != null){
      path= this.context.storeCode;
   
   
    }
    else{ 
      let url = window.location.pathname;
     
        let index = url.search("/")
        let lastIndexOf=url.indexOf("/", url.indexOf("/") + 1);

  if (index !== -1) {
      let urlLength;
      if(lastIndexOf===-1){
          let token = url;
          this.context.updateAppContext(token)
       
      }
      else{
           urlLength = lastIndexOf;
           let token = url.slice(index , urlLength);
           this.context.updateAppContext(token)
    
           

      }
  
  }
  else {
    alert("try again")
  }

    }
 
    //this.getCategoryName();
}

getCategoryName = () => {
    let url = 'https://api.dukaanshala.com/web/category/'+ this.context.categoryId;
        const agent = new https.Agent({
            rejectUnauthorized: false,
        });
        Axios.get(url, { httpsAgent: agent })
        .then(response => {
            if(response && response.data && response.data){
               // this.props.setCategories(response.data.categories);
                this.setState({categoryName: response.data.categoryName});
            }
            else{
                //failure scenario
            }
            }
        )
  };
  backPage(){
    this.setState({redirect: true})
}

    render(){
      const { redirect } = this.state

        if (redirect)
            return (<Redirect to={{
                pathname: `${this.context.storeCode}`
            }} />)
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
          <div className="" >
            <h1 className="heading" ><img src={backArror} style={{marginRight:"15px"}} alt="product" onClick={this.backPage}/>{this.context.categoryName}</h1>
            
            </div><ProductDetail/>
            <Footer/>
        </div>
        </>
       
      )
    }
  }
  
  export default ProductDetailPage