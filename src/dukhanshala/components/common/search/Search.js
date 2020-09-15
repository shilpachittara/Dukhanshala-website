import React from 'react';
import './Search.css';
import searchImg from "../../../assets/images/search.svg"

const Search = () =>(
    <div className="search_input_container">
        <input type="search" className="search_input form-control" placeholder="Search categories or products" />
        <img className="search_input_img" src={searchImg} alt="search" />
    </div>
)

export default Search;