import React from 'react';
import { Redirect} from 'react-router-dom';
import './ProductItems.css';
import { AppContext } from 'Context/AppContext';


class ProductItems extends React.Component{
    static contextType = AppContext;
    constructor(){
        super();

        this.state = {
            path: null,
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
      
      path = path + "/product/detail/" + this.props.productId;
      this.setState({path: path});

    }

    productDetail = (event) => {
        this.context.updateCategoryName(this.props.categoryName); 
        this.context.updateCategoryId(this.props.categoryId);
        this.context.updateProductId(this.props.productId);
        this.setState({redirect: true})
    }

    render(){
        const { redirect } = this.state

        if (redirect)
            return (<Redirect to={{
                pathname: `${this.state.path}`
            }} />)
 return(
   <div className="col-12 col-sm-3 px-0 pr-md-4 my-md-2 mb-2">
        <div className="row h-50" onClick={this.productDetail}>
            
            <div className="col-4 col-sm-12" >
                <div className="thumbnail-container thumbnail-padding">
                    <img src={this.props.productImage} alt={this.props.productName} className="thumbnail rounded-xl img-fluid" />
                    <span className="discount-badge">{this.props.offer}% off</span>
                </div>
            </div>

            <div className="col-8 col-sm-12 px-0 px-md-3 pr-3 align-bottom my-auto">
                <h6 className="mt-1 mt-sm-3 mb-0">{this.props.productName}</h6>
                <small>{this.props.availableQuantity} </small>
                <div className="mt-1">
                    <span>₹ {this.props.sellingPrice}</span>
                    <small className="small-text mr-2 pl-1">{this.props.mrp}</small>
                    <span className="btn btn-warning float-right py-1">ADD</span>
                </div>
            </div>

        </div>
    </div>
)
 }
}

export default ProductItems;