import React, { Component } from 'react';
import Categories from '../components/categories/Categories';
import CompanyInfo from '../components/companyInfo/CompanyInfo';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';


class CategoryPage extends Component {
    render(){
      return(
        <div>
          <Header />
          <section className="container CategoriesPage">
            <h2 className="heading">Categories</h2>          
              <Categories/>
          </section>   
          <section>
            <CompanyInfo/>
          </section>    
          <Footer/>
        </div>
      )
    }
  }
  
  export default CategoryPage