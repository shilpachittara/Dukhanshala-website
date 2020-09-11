import React from 'react';
import './Products.css'
import {Link} from "react-router-dom";
import ProductDetail from "./ProductsHome";

class ProductList extends React.Component{


    render(){
        return(
            <div className="container productItems">
                <div className="row">
                { this.props.categories &&
                    this.props.categories.map((category, index)  =>(
                        <section className="container" key={index}>
                          <h2 className="heading">{category.categoryName} <Link to="/product/detail" className="viewAll">View All</Link></h2>
                            <ProductDetail categoryId={category.categoryId}/>
                        </section>
                    ))
                }
                </div>

            </div>
        )
    }

}

export default ProductList;