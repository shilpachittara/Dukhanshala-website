import React from 'react';
import {withRouter} from 'react-router-dom';
import './CategoriesItems.css';


const CategoriesItems = ({categoryName, categoryImage, history, linkUrl, match}) => (
        <div className="item-wrap" 
        onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <img src={categoryImage} alt={categoryName} className="category-image rounded-xl" />
            <div className="gray-overlay">
                <p className="category-text px-2">{categoryName}</p>
            </div>
        </div>
)

export default withRouter(CategoriesItems);