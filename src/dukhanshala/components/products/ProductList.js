import React from 'react';
import './Products.css'
import {Link, Redirect} from "react-router-dom";
import ProductDetail from "./ProductsHome";
import { AppContext } from 'Context/AppContext';

class ProductList extends React.Component{


    static contextType = AppContext;
    constructor(){
        super();

        this.state = {
            path: null,
        }
        this.submit = this.submit.bind(this)
    }

    submit(category) {

        this.context.updateCategoryId(category);
        var path;
      
      if(this.context.storeCode != null){ 
        path= this.context.storeCode;
      }
      else{
        this.context.updateAppContext(window.location.pathname); 
        path= window.location.pathname;
      }
      path = path + "/products/" + category;
      this.setState({path: path});
        this.setState({redirect: true});
        console.log(this.state.path);
    }

    render(){
        const { redirect } = this.state

        if (redirect)
            return (<Redirect to={{
                pathname: `${this.state.path}`
            }} />)

        return(
            <div className="container productItems">
                <div className="row">
                { this.props.categories &&
                    this.props.categories.map((category, index)  =>(
                        <section className="container" key={index}>
                          <h2 className="heading">{category.categoryName} 
                          <a className="viewAll"  onClick={this.submit.bind(this,category.categoryId)}>
                          View All</a></h2>
                          
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