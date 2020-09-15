import React from 'react';
import './Categories.css'
import CategoriesItems from '../categories-items/CategoriesItems';
import axios from 'axios';
import {AppContext} from "../../../Context/AppContext";

class CategoriesHome extends React.Component{
    static contextType = AppContext;
    constructor(){
        super();

        this.state = {
            categories: null,
        }
    }
    componentDidMount() {
      var path;
      if(this.context.storeCode != null){
        path= this.context.storeCode;
      }
      else{
        this.context.updateAppContext(window.location.pathname); 
        path= window.location.pathname;
      }
        this.getCategoriesList(path);
    }
    getCategoriesList = (path) => {
      let url = 'https://35.240.173.248:4200/web/category/detail'+ path;
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

export default CategoriesHome;