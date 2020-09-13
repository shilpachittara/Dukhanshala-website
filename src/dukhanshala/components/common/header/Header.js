import React from 'react';
import './Header.css';
import logoImg from '../../../assets/images/logo.webp'
//import fbIcon from '../../../assets/images/facebook.svg'
//import twIcon from '../../../assets/images/twitter.svg'
import Search from '../search/Search';
import { Link } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import axios from 'axios';

class Header extends React.Component{
static contextType = AppContext;
    constructor(){
        super();
        this.state = {
            storeName: null
        }
    }

    componentDidMount() {
      if(this.context.storeCode == null){
        this.context.updateAppContext(window.location.pathname); 
      }
          this.getStoreDetail();
    }

    getStoreDetail = () => {
    var path = null; 
    if(this.context.storeCode != null){
    path = this.context.storeCode
    }
    else{
        path = window.location.pathname;
    }
    let url = 'http://35.240.173.248:8005/web/store/detail'+ path;
    axios.get(url)
        .then(response => {
            if(response && response.data && response.data){
                //this.context.updateCategories(response.data);
                this.setState({storeName: response.data.storeName});
            }
            else{
                //failure scenario
            }
            }
        )
        
  };
  render(){
    return(
    <div className="sticky-top headerPanel">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-auto">
                    <Link to="/"><img className="logo" src={logoImg} alt="Dukhan Shala" /></Link>
                </div>
                <div className="col">
                    <div className="store-title">
                        <h3 className="logo-title">{this.state.storeName}</h3>
                        <p className="made-title">STORE MADE WITH @Dukaanshala</p>
                    </div>
                </div>
                {/*<div className="col-auto">
                    <img className="socialIcon" src={fbIcon} alt="Facebook" />
                    <img className="socialIcon" src={twIcon} alt="Twitter" />
    </div>*/}
            </div>
            <Search/>
        </div>
    </div>
)
    }
}

export default Header;
