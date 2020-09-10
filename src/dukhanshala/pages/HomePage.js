import React, { Component } from 'react';
import Categories from '../components/categories/Categories';
import CompanyInfo from '../components/companyInfo/CompanyInfo';
import { Link } from 'react-router-dom';
import ProductList from "../components/products/ProductList";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null
        }
    }

    render(){
        console.log('----------------');
        console.log(this.state);
    return(
      <div>
        <section className="container">
          <h2 className="heading">Categories <Link to="/categories" className="viewAll">View All</Link></h2>          
            <div className="scrolling-wrapper">
              <Categories setCategories={categories => {this.setState({categories})}}/>
            </div>
        </section>
          <ProductList categories={this.state.categories}/>
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