import React from 'react';
import './Categories.css'
import CategoriesItems from '../categories-items/CategoriesItems';
import axios from 'axios';

class Categories extends React.Component{
    
    constructor(){
        super();

        /*this.state ={
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
        }*/
        this.state = {
            categories: null
        }
    }
    componentDidMount() {
        this.getCategoriesList();
    }
    getCategoriesList = () => {
      let url = 'http://35.240.173.248:8005/web/category/detail/test10';
      axios.get(url)
          .then(response => {
              if(response && response.data && response.data.categories){
                  this.props.setCategories(response.data.categories);
                  this.setState({categories: response.data.categories});
              }
              else{
                  //failure scenario
              }
              }
          )
    };
    render(){
        console.log(this.state);
        return(
                <div className="categories-item">
                { this.state.categories &&
                    this.state.categories.map(({id, ...otherSectionProps}) =>(
                        <CategoriesItems key={id} {...otherSectionProps} />
                    ))
                }
                </div>    
        )
    }

}

export default Categories;