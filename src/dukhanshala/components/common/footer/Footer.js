import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Footer.css";
import HomeIcon from '../../../assets/images/home.svg';
import CategoriesIcon from '../../../assets/images/categories.svg';
import BagIcon from '../../../assets/images/bag.svg';
import OrderIcon from '../../../assets/images/orders.svg';
import { AppContext } from 'Context/AppContext';

class Footer extends React.Component{
    static contextType = AppContext;
    constructor(){
        super();
        this.state = {
            home: null,
            category: null,
            bag: null,
            orders: null
        }
    }
    componentDidMount() {
          if(this.context.storeCode != null){
            this.setState({home: this.context.storeCode});
            this.setState({category: this.context.storeCode+"/categories"});
            this.setState({bag: this.context.storeCode+"/bag"});
            this.setState({orders: this.context.storeCode+"/orders"});
            }
            else{
            this.setState({home: window.location.pathname});
            this.setState({category: window.location.pathname+"/categories"});
            this.setState({bag: window.location.pathname+"/bag"});
            this.setState({orders: window.location.pathname+"/orders"});
            }
      }
      render(){
        return(
    <nav className="fixed-bottom fixedNav border-top bg-white">
        <div className="row text-center mt-10">
            <div className="col">
                <NavLink className="link" to={`${this.state.home}`} activeStyle={{color:"red"}}> 
                    <img src={HomeIcon} className="icon" alt="Home Icon" />
                    <p className="title">Home</p>
                </NavLink>
            </div> 
            <div className="col">
                <NavLink className="link" to={`${this.state.category}`} activeClassName={"active"}> 
                    <img src={CategoriesIcon} className="icon" alt="Categories Icon" />
                    <p className="title">Categories</p>
                </NavLink>
            </div> 
            <div className="col">
                <Link className="link" to={`${this.state.bag}`}> 
                    <img src={BagIcon} className="icon" alt="Bag Icon" />
        <span className="icon-badge">{this.context.bag}</span>
                    <p className="title">Bag</p>
                </Link>
            </div> 
            <div className="col">
                <Link className="link" to={`${this.state.orders}`}> 
                    <img src={OrderIcon} className="icon" alt="Orders Icon" />
                    <p className="title">Orders</p>                
                </Link>
            </div> 
        </div>
    </nav>
)
        }
}
export default Footer;
