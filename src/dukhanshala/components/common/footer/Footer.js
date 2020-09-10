import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Footer.css";
import HomeIcon from '../../../assets/images/home.svg';
import CategoriesIcon from '../../../assets/images/categories.svg';
import BagIcon from '../../../assets/images/bag.svg';
import OrderIcon from '../../../assets/images/orders.svg';

const Footer = () => (
    <nav className="fixed-bottom fixedNav border-top bg-white">
        <div className="row text-center mt-10">
            <div className="col">
                <NavLink className="link" to="/" activeStyle={{color:"red"}}> 
                    <img src={HomeIcon} className="icon" alt="Home Icon" />
                    <p className="title">Home</p>
                </NavLink>
            </div> 
            <div className="col">
                <NavLink className="link" to="/Categories" activeClassName={"active"}> 
                    <img src={CategoriesIcon} className="icon" alt="Categories Icon" />
                    <p className="title">Categories</p>
                </NavLink>
            </div> 
            <div className="col">
                <Link className="link" to="/Bag"> 
                    <img src={BagIcon} className="icon" alt="Bag Icon" />
                    <span className="icon-badge">1</span>
                    <p className="title">Bag</p>
                </Link>
            </div> 
            <div className="col">
                <Link className="link" to="/Orders"> 
                    <img src={OrderIcon} className="icon" alt="Orders Icon" />
                    <p className="title">Orders</p>                
                </Link>
            </div> 
        </div>
    </nav>
)

export default Footer;
