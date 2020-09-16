import React, { Component } from 'react';
import ProductDetail from '../components/product-detail/ProductDetail';
import backArror from '../assets/images/icon_back.svg';
import { Redirect } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import Axios from 'axios';
import https from 'https';

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
      
      if(this.context.storeCode == null){ 
        this.context.updateAppContext(window.location.pathname); 
      }
    //this.getCategoryName();
}

getCategoryName = () => {
    let url = 'https://35.198.221.218:4200/web/category/'+ this.context.categoryId;
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
            <h1 className="heading" ><img src={backArror} style={{marginRight:"15px"}} alt="product" onClick={this.backPage}/>{this.context.categoryName}</h1>
            <ProductDetail/>
        </div>
        
      )
    }
  }
  
  export default ProductDetailPage