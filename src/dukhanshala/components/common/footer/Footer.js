import React from 'react';
import "./Footer.css";
import HomeIcon from '../../../assets/images/home.svg';
import CategoriesIcon from '../../../assets/images/categories.svg';
import BagIcon from '../../../assets/images/bag.svg';
import OrderIcon from '../../../assets/images/orders.svg';
import { AppContext } from 'Context/AppContext';
import { Link, NavLink } from 'react-router-dom';

class Footer extends React.Component {
    static contextType = AppContext;
    constructor() {
        super();
        this.state = {
            home: null,
            category: null,
            bag: null,
            orders: null,
            globalPath: '',
            activeHome: window.location.pathname.indexOf("/", window.location.pathname.indexOf("/") + 1)===-1?true:false,
            activeCategories: window.location.pathname.indexOf("categories")===-1?false:true,
            activeBag: window.location.pathname.indexOf("bag")===-1?false:true,
            aciveOrders:  window.location.pathname.indexOf("orders")===-1?false:true,
        }
    }
    componentDidMount() {
        this.updateStoreCode()

    }
    changeActiveButton = (value) => {
 
        if (value === "home") {
            this.setState({
                activeHome: true,
                activeCategories: false,
                activeBag: false,
                activeOrders: false
            })
        }

        if (value === "categories") {
            this.setState({
                activeHome: false,
                activeCategories: true,
                activeBag: false,
                activeOrders: false
            })
        }
        if(value==="bag"){
            this.setState({
                activeHome:false,
                activeCategories:false,
                activeBag:true,
                activeOrders:false 
            })
        }
       if(value==="orders"){
            this.setState({
                activeHome:false,
                activeCategories:false,
                activeBag:false,
                activeOrders:true
            })
        }
    }

        updateStoreCode = () => {
            if (this.context.storeCode != null) {
                this.setState({ home: this.context.storeCode });
                this.setState({ category: this.context.storeCode + "/categories" });
                this.setState({ bag: this.context.storeCode + "/bag" });
                this.setState({ orders: this.context.storeCode + "/orders" });
            }
            else {


                let url = window.location.pathname;

                let index = url.search("/")
                let lastIndexOf = url.indexOf("/", url.indexOf("/") + 1);

                if (index !== -1) {
                    let urlLength;
                    if (lastIndexOf === -1) {
                        let token = url;
                        this.context.updateAppContext(token)
                        this.setState({ home: token });
                        this.setState({ category: token + "/categories" });
                        this.setState({ bag: token + "/bag" });
                        this.setState({ orders: token + "/orders" });


                    }
                    else {
                        urlLength = lastIndexOf;
                        let token = url.slice(index, urlLength);
                        this.context.updateAppContext(token)
                        this.setState({ home: token });
                        this.setState({ category: token + "/categories" });
                        this.setState({ bag: token + "/bag" });
                        this.setState({ orders: token + "/orders" });

                    }

                }
                else {
                    alert("try again")
                }

            }

            if(localStorage.getItem("bagCountBagPage") !== null ){
                var bagCount=parseInt(localStorage.getItem("bagCountBagPage"))
                this.context.updateBagCount(bagCount)
              }
        }

        render() {
            return (
                <nav className="fixed-bottom fixedNav border-top bg-white">
                    <div className="row text-center mt-10">
                        <div className="col" onClick={() => this.changeActiveButton("home")}>
                        <NavLink className="link" to={`${this.state.home}`} activeClassName={"active"}>
                                <img src={HomeIcon} className={this.state.activeHome?"active-icon":"icon"} alt="Home Icon" />
                                <p className="title" style={this.state.activeHome?{color:'black'}:{}}>Home</p>
                            </NavLink>
                        </div>
                        <div className="col" onClick={() => this.changeActiveButton("categories")}>
                        <NavLink className="link" to={`${this.state.category}`} activeClassName={"active"}>
                                <img src={CategoriesIcon} className={this.state.activeCategories?"active-icon":"icon"} alt="Categories Icon" />
                                <p className="title"  style={this.state.activeCategories?{color:'black'}:{}}>Categories</p>
                            </NavLink>
                        </div>
                        <div className="col"  onClick={() => this.changeActiveButton("bag")}>
                        <Link className="link" to={`${this.state.bag}`}>
                                <img src={BagIcon} className={this.state.activeBag?"active-icon":"icon"} alt="Bag Icon" />
                                <span className="icon-badge">{this.context.bagCount}</span>
                                <p className="title"  style={this.state.activeBag?{color:'black'}:{}}>Bag</p>
                            </Link>
                        </div>
                        <div className="col" onClick={() => this.changeActiveButton("orders")}>
                        <Link className="link" to={`${this.state.orders}`}>
                                <img src={OrderIcon} className={this.state.activeOrders?"active-icon":"icon"} alt="Orders Icon" />
                                <p className="title"  style={this.state.activeOrders?{color:'black'}:{}}>Orders</p>
                            </Link>
                        </div>
                    </div>
                </nav>
            )
        }
    }
    export default Footer;
