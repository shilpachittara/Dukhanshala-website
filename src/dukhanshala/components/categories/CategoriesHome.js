import React from 'react';
import './Categories.css'
import CategoriesItems from '../categories-items/CategoriesItems';
import axios from 'axios';
import {AppContext} from "../../../Context/AppContext";
import https from 'https';


class CategoriesHome extends React.Component{
    static contextType = AppContext;
    constructor(){
        super();

        this.state = {
            categories: null,
        }
    }
    componentDidMount() {


    // ======
    var path;


    if(this.context.storeCode != null){
      path= this.context.storeCode;
      this.getCategoriesList(path);
    }
    else{ 
      let url = window.location.pathname;
     
        let index = url.search("/")
        let lastIndexOf=url.indexOf("/", url.indexOf("/") + 1);

  if (index !== -1) {
      let urlLength;
      if(lastIndexOf===-1){
          let token = url;
          this.context.updateAppContext(token)
        
          this.getCategoriesList(token);
       
      }
      else{
           urlLength = lastIndexOf;
           let token = url.slice(index , urlLength);
           this.context.updateAppContext(token)
           this.getCategoriesList(token);
   

      }
  
  }
  else {
    alert("try again")
  }

    }
  }
    getCategoriesList = (path) => {
        let url = 'http://35.240.173.248:8000/web/category/detail' + path;
        const agent = new https.Agent({
            rejectUnauthorized: false,
        });
        axios.get(url, { httpsAgent: agent })
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