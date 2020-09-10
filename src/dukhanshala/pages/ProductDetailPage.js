import React, { Component } from 'react';
import ProductDetail from '../components/product-detail/ProductDetail';
import backArror from '../assets/images/icon_back.svg';
import { Link } from 'react-router-dom';

class ProductDetailPage extends Component {
    render(){
      return(
        <div className="container">
            <h1 className="heading"><Link to="/"><img src={backArror} style={{marginRight:"15px"}} alt="product" /></Link> New Arrival</h1>
            <ProductDetail/>
        </div>
      )
    }
  }
  
  export default ProductDetailPage