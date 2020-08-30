import React, { Component } from 'react';
import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';
import CompanyInfo from '../components/companyInfo/CompanyInfo';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render(){
    return(
      <div>
        <section className="container">
          <h2 className="heading">Categories <Link to="/categories" className="viewAll">View All</Link></h2>          
            <div className="scrolling-wrapper">
              <Categories/>
            </div>
        </section>
        <section className="container">
          <h2 className="heading">New Arrival <Link to="/newarrival" className="viewAll">View All</Link></h2>          
            <Products/>
        </section>
        <section className="container">
          <h2 className="heading">Grocery <Link to="/grocery" className="viewAll">View All</Link></h2>          
            <Products/>
        </section>    
        <section>
          <CompanyInfo/>
        </section>    
      </div>
    )
  }
}

export default HomePage