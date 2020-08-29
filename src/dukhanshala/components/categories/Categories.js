import React from 'react';
import './Categories.css'
import CategoriesItems from '../categories-items/CategoriesItems';

class Categories extends React.Component{
    
    constructor(){
        super();

        this.state ={
            sections:[
                {
                  title: 'New Arrival',
                  imageUrl: 'https://dukaan-api.1kg.me/static/images/category-def.jpg',
                  id: 1,
                  linkUrl: 'categories/new-arrival'
                },
                {
                  title: 'Grocery',
                  imageUrl: 'https://dukaan-api.1kg.me/static/images/category-def.jpg',
                  id: 2,
                  linkUrl: 'categories/grocery'
                },
                {
                  title: 'Test 1',
                  imageUrl: 'https://dukaan-api.1kg.me/static/images/category-def.jpg',
                  id: 3,
                  linkUrl: 'categories/grocery'
                },
                {
                  title: 'Test 2',
                  imageUrl: 'https://dukaan-api.1kg.me/static/images/category-def.jpg',
                  id: 4,
                  linkUrl: 'categories/grocery'
                },
                {
                  title: 'Test 3',
                  imageUrl: 'https://dukaan-api.1kg.me/static/images/category-def.jpg',
                  id: 5,
                  linkUrl: 'categories/grocery'
                }                                               
              ]
        }
    }

    render(){
        return(
                <div className="categories-item">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) =>(
                        <CategoriesItems key={id} {...otherSectionProps} />
                    ))
                }
                </div>    
        )
    }

}

export default Categories;