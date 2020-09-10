import React from 'react';
import './Products.css'
import {Link} from "react-router-dom";
import Products from "./Products";

class ProductList extends React.Component{


    render(){
        return(
            <div className="container productItems">
                <div className="row">
                { this.props.categories &&
                    this.props.categories.map((category, index)  =>(
                        <section className="container" key={index}>
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