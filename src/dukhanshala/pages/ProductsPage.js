import React, { Component } from 'react';
import CompanyInfo from '../components/companyInfo/CompanyInfo';
import Products from '../components/products/Products';


class ProductsPage extends Component {
    render(){
      return(
        <div>
          <section className="container CategoriesPage">
            <h2 className="heading">Products</h2>          
              <Products/>
          </section>   
          <section>
            <CompanyInfo/>
          </section>    
        </div>
      )
    }
  }
  
  export default ProductsPage