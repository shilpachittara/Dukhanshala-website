import React from 'react';
import {withRouter} from 'react-router-dom';
import './CategoriesItems.css';


const CategoriesItems = ({title, imageUrl, history, linkUrl, match}) => (
        <div className="item-wrap" 
        onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <img src={imageUrl} alt={title} className="category-image rounded-xl" />
            <div className="gray-overlay">
                <p className="category-text px-2">{title}</p>
            </div>
        </div>
)

export default withRouter(CategoriesItems);