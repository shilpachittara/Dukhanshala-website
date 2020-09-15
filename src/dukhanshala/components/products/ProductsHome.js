import React from 'react';
import './Products.css'
import ProductItems from '../product-items/ProductItems';
import axios from "axios";
import { AppContext } from 'Context/AppContext';

class ProductsHome extends React.Component{
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
      let url = `https://35.240.173.248:4200/web/category/products${this.context.storeCode}/${this.props.categoryId}`;
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
                    this.state.products.slice(0,2).map(({id, ...otherSectionProps}, index) =>(
                        <ProductItems key={index} {...otherSectionProps} />
                    ))
                }
                </div>    
            </div>
        )
    }

}

export default ProductsHome;