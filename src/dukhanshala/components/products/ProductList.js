import React from 'react';
import './Products.css'
import { Redirect} from "react-router-dom";
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

    submit(category, name) {

        this.context.updateCategoryId(category);
        this.context.updateCategoryName(name);
        var path;
      
      if(this.context.storeCode != null){ 
        path= this.context.storeCode;
      }
      else{ 
        let url = window.location.pathname;
       
          let index = url.search("/")
          let lastIndexOf=url.indexOf("/", url.indexOf("/") + 1);
  
    if (index !== -1) {
        let urlLength;
        if(lastIndexOf==-1){
            let token = url;
            this.context.updateAppContext(token)
            console.log("this.context.storeCode",this.context.storeCode)
      
            path= token;
         
        }
        else{
             urlLength = lastIndexOf;
             let token = url.slice(index , urlLength);
             this.context.updateAppContext(token)
      
             path= token
             console.log("this.context.storeCode",this.context.storeCode)
  
        }
    
    }
    else {
      alert("try again")
    }
  
      }
   
      path = path + "/products/" + category;
      this.setState({path: path});
        this.setState({redirect: true});
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
                          <span className="viewAll"  onClick={this.submit.bind(this,category.categoryId,category.categoryName)}>
                          View All</span></h2>
                          
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