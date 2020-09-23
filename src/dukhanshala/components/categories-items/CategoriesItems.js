import React from 'react';
import './CategoriesItems.css';
import { AppContext } from 'Context/AppContext';
import { Redirect } from 'react-router-dom';


class CategoriesItems extends React.Component{
    static contextType = AppContext;
    constructor(){
        super();

        this.state = {
            category: null,
        }
        //this.submit = this.submit.bind(this)
    }
    componentDidMount() {
 

    //   ===

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
      if(lastIndexOf===-1){
          let token = url;
          this.context.updateAppContext(token)
   
    
          path= token;
       
      }
      else{
           urlLength = lastIndexOf;
           let token = url.slice(index , urlLength);
           this.context.updateAppContext(token)
    
           path= token
         

      }
  
  }
  else {
    alert("try again")
  }

    }
 
    // ===
      path = path + "/products/" + this.props.categoryId;
      this.setState({category: path});

    }

    submit = (event) => {
        this.context.updateCategoryId(this.props.categoryId);
        this.context.updateCategoryName(this.props.categoryName);
        this.setState({redirect: true})
    }

    render(){
        const { redirect } = this.state

        if (redirect)
            return (<Redirect to={{
                pathname: `${this.state.category}`
            }} />)
        return(
            <div className="item-wrap" onClick={this.submit}>
                <img src={this.props.categoryImage} alt={this.props.categoryName} className="category-image rounded-xl" />
                <div className="gray-overlay">
                    <p className="category-text px-2">{this.props.categoryName}</p>
                </div>
            </div>
        )
    }

}

export default CategoriesItems;
