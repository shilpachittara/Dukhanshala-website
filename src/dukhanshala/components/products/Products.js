import React from 'react';
import './Products.css'
import ProductItems from '../product-items/ProductItems';
import axios from "axios";
import { AppContext } from 'Context/AppContext';

class Products extends React.Component{
    static contextType = AppContext;
    constructor(){
        super();

        this.state ={
            products: null
        }
    }
    componentDidMount() {
        this.getProductList();
    }
    getProductList = () => {
      let url = `http://35.240.173.248:8005/web/category/products${this.context.storeCode}/${this.context.categoryId}`;
      axios.get(url)
          .then(response => {
              if(response && response.data && response.data.products){
                  this.setState({products: response.data.products});
              }
              else{
                  //failure scenario
              }
              }
          )
    };

    render(){
        return(
            <div className="container productItems">
                <div className="row">
                { this.state.products &&
                    this.state.products.map(({id, ...otherSectionProps}, index) =>(
                        <ProductItems key={index} {...otherSectionProps} />
                    ))
                }
                </div>    
            </div>
        )
    }

}

export default Products;