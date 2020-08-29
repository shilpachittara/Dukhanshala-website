import React, { Component } from 'react';
import Categories from 'dukhanshala/components/categories/Categories';
import CompanyInfo from 'dukhanshala/components/companyInfo/CompanyInfo';


class CategoryPage extends Component {
    render(){
      return(
        <div>
          <section className="container CategoriesPage">
            <h2 className="heading">Categories</h2>          
              <Categories/>
          </section>   
          <section>
            <CompanyInfo/>
          </section>    
        </div>
      )
    }
  }
  
  export default CategoryPage