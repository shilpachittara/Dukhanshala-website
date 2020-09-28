import React, { Component } from 'react';
import ProductDetail from '../components/product-detail/ProductDetail';
import backArror from '../assets/images/icon_back.svg';
import { Redirect } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import Axios from 'axios';
import https from 'https';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';

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
      if(lastIndexOf==-1){
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
                pathname: `${this.context.storeCode}/products/${this.context.categoryId}`
            }} />)
      return(
    
        <div className="container">
          <Header />
          <div className="" >
            <h1 className="heading" ><img src={backArror} style={{marginRight:"15px"}} alt="product" onClick={this.backPage}/>{this.context.categoryName}</h1>
            
            </div><ProductDetail/>
            <Footer/>
        </div>
       
      )
    }
  }
  
  export default ProductDetailPage