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
      var path;
      
      if(this.context.storeCode != null){ 
        path= this.context.storeCode;
      }
      else{
        this.context.updateAppContext(window.location.pathname); 
        path= window.location.pathname;
      }
      path = path + "/products/" + this.props.categoryId;
      this.setState({category: path});

    }

    submit = (event) => {
        this.context.updateCategoryId(this.props.categoryId);
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
/*const CategoriesItems = ({categoryName, categoryImage, history, match,categoryId}) => (
        <div className="item-wrap" 
        onClick={()=> history.push(`${match.url}/${categoryId}`)}>
            <img src={categoryImage} alt={categoryName} className="category-image rounded-xl" />
            <div className="gray-overlay">
                <p className="category-text px-2">{categoryName}</p>
            </div>
        </div>
)

export default withRouter(CategoriesItems);*/