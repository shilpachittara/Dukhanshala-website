import React from 'react';
import './Products.css'
import ProductItems from '../product-items/ProductItems';

class ProductByCategory extends React.Component{

    constructor(){
        super();

        this.state ={
            sections:[
                {
                  title: 'First Products',
                  imageUrl: 'https://dukaan-api.1kg.me/static/images/category-def.jpg',
                  id: 1,
                  quantity: 3,
                  basePrice: 300, 
                  price: 200,
                  offer: 30,
                  linkUrl: 'product/detail'
                }, 
                {
                    title: 'Second Products',
                    imageUrl: 'https://dukaan-api.1kg.me/static/images/category-def.jpg',
                    id: 2,
                    quantity: 3,
                    basePrice: 300, 
                    price: 200,
                    offer: 30,
                    linkUrl: 'product/detail'
                  }                                                            
              ]
        }
    }
   
    render(){
        return(
            <div className="container productItems">
                <div className="row">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) =>(

                        <ProductItems key={id} {...otherSectionProps} />
                    ))
                }
                </div>    
            </div>
        )
    }
}
export default ProductByCategory;