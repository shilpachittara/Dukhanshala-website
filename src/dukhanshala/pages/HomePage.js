import React, { Component } from 'react';
import Categories from '../components/categories/Categories';
import CompanyInfo from '../components/companyInfo/CompanyInfo';
import { Link } from 'react-router-dom';
import ProductList from "../components/products/ProductList";
import {AppContext} from "../../Context/AppContext";

class HomePage extends Component {
    static contextType = AppContext;
    constructor(props) {
        super(props);
        this.state = {
            categories: null
        }
    }
    
    render(){
    return(
      <div>
        <section className="container">
          <h2 className="heading">Categories <Link to={`${this.context.storeCode}/categories`} className="viewAll">View All</Link></h2>          
            <div className="scrolling-wrapper">
              <Categories/>
            </div>
        </section>
          <ProductList categories={this.context.categories}/>
        {/*<section className="container">
          <h2 className="heading">New Arrival <Link to="/newarrival" className="viewAll">View All</Link></h2>          
            <Products/>
        </section>
        <section className="container">
          <h2 className="heading">Grocery <Link to="/grocery" className="viewAll">View All</Link></h2>          
            <Products/>
    </section>   */} 
        <section>
          <CompanyInfo/>
        </section>    
      </div>
    )
  }
}

export default HomePage