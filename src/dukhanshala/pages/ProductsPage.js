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
        <div>
          <Header />
          <section className="container CategoriesPage">
          <h3 className="heading">{this.context.categoryName}</h3> 
            <h2 className="heading">Products</h2>          
              <Products/>
          </section>   
          {/* <section>
            <CompanyInfo/> 
          </section>   */}
          <Footer/> 
        </div>
      )
    }
  }
  
  export default ProductsPage