import React from 'react';
import './Header.css';
import logoImg from '../../../assets/images/logo.webp'
import fbIcon from '../../../assets/images/facebook.svg'
import twIcon from '../../../assets/images/twitter.svg'
import Search from '../search/Search';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="sticky-top headerPanel">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-auto">
                    <Link to="/"><img className="logo" src={logoImg} alt="Dukhan Shala" /></Link>
                </div>
                <div className="col">
                    <div className="store-title">
                        <h3 className="logo-title">Dukhan Shala</h3>
                        <p className="made-title">STORE MADE WITH @</p>
                    </div>
                </div>
                <div className="col-auto">
                    <img className="socialIcon" src={fbIcon} alt="Facebook" />
                    <img className="socialIcon" src={twIcon} alt="Twitter" />
                </div>
            </div>
            <Search/>
        </div>
    </div>
)

export default Header;
