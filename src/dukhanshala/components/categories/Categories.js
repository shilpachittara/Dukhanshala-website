import React from 'react';
import './Categories.css'
import CategoriesItems from '../categories-items/CategoriesItems';
import axios from 'axios';
import {AppContext} from "../../../Context/AppContext";

class Categories extends React.Component{
    static contextType = AppContext;
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
      this.context.updateAppContext(window.location.pathname); 
        this.getCategoriesList();
    }
    getCategoriesList = () => {
      let url = 'http://35.240.173.248:8005/web/category/detail'+ window.location.pathname;
      axios.get(url)
          .then(response => {
              if(response && response.data && response.data.categories){
                 // this.props.setCategories(response.data.categories);
                  this.context.updateCategories(response.data.categories);
                  this.setState({categories: response.data.categories});
              }
              else{
                  //failure scenario
              }
              }
          )
    };

    render(){
        return(
                <div className="categories-item">
                { this.state.categories &&
                    this.state.categories.slice(0,6).map(({id, ...otherSectionProps}, index) =>(
                        <CategoriesItems key={index} {...otherSectionProps} />
                    ))
                }
                </div>    
        )
    }

}

export default Categories;