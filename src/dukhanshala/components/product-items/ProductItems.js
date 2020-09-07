import React from 'react';
import {withRouter} from 'react-router-dom';
import './ProductItems.css';

const ProductItems = ({productName, productImage, availableQuantity, mrp, sellingPrice, offer, history, linkUrl, match}) => (
    <div className="col-12 col-sm-3 px-0 pr-md-4 my-md-2 mb-2">
        <div className="row h-50">
            
            <div className="col-4 col-sm-12" 
                onClick={()=> history.push(`${match.url}${linkUrl}`)}>
                <div className="thumbnail-container thumbnail-padding">
                    <img src={productImage} alt={productName} className="thumbnail rounded-xl img-fluid" />
                    <span className="discount-badge">{offer}% off</span>
                </div>
            </div>

            <div className="col-8 col-sm-12 px-0 px-md-3 pr-3 align-bottom my-auto">
                <h6 className="mt-1 mt-sm-3 mb-0"
                onClick={()=> history.push(`${match.url}${linkUrl}`)}>{productName}</h6>
                <small>{availableQuantity} piece</small>
                <div className="mt-1">
                    <span>₹ {sellingPrice}</span>
                    <small className="small-text mr-2 pl-1">₹ {mrp}</small>
                    <span className="btn btn-warning float-right py-1">ADD</span>
                </div>
            </div>

        </div>
    </div>
)

export default withRouter(ProductItems);