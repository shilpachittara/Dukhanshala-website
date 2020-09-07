import React from 'react';
import './Products.css'
import ProductItems from '../product-items/ProductItems';
import axios from "axios";
import {Link} from "react-router-dom";
import Products from "./Products";

class ProductList extends React.Component{

    constructor(){
        super();


    }


    render(){
        return(
            <div className="container productItems">
                <div className="row">
                { this.props.categories &&
                    this.props.categories.map(category =>(
                        <section className="container">
                          <h2 className="heading">{category.categoryName} <Link to="/newarrival" className="viewAll">View All</Link></h2>
                            <Products categoryId={category.categoryId}/>
                        </section>
                    ))
                }
                </div>

            </div>
        )
    }

}

export default ProductList;