import React from 'react';
import "./Footer.css";
import HomeIcon from '../../../assets/images/home.svg';
import CategoriesIcon from '../../../assets/images/categories.svg';
import BagIcon from '../../../assets/images/bag.svg';
import OrderIcon from '../../../assets/images/orders.svg';
import { AppContext } from 'Context/AppContext';

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
            activeHome: window.location.pathname.indexOf("/", window.location.pathname.indexOf("/") + 1)==-1?true:false,
            activeCategories: window.location.pathname.indexOf("categories")==-1?false:true,
            activeBag: window.location.pathname.indexOf("bag")==-1?false:true,
            aciveOrders:  window.location.pathname.indexOf("orders")==-1?false:true,
        }
    }
    componentDidMount() {
        this.updateStoreCode()

    }
    changeActiveButton = (value) => {
        console.log("value ,",value)
        if (value == "home") {
            this.setState({
                activeHome: true,
                activeCategories: false,
                activeBag: false,
                activeOrders: false
            })
        }

        if (value == "categories") {
            this.setState({
                activeHome: false,
                activeCategories: true,
                activeBag: false,
                activeOrders: false
            })
        }
        if(value=="bag"){
            this.setState({
                activeHome:false,
                activeCategories:false,
                activeBag:true,
                activeOrders:false 
            })
        }
       if(value=="orders"){
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
                    if (lastIndexOf == -1) {
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
        }

        render() {
            return (
                <nav className="fixed-bottom fixedNav border-top bg-white">
                    <div className="row text-center mt-10">
                        <div className="col" onClick={() => this.changeActiveButton("home")}>
                            <a className="link" href={`${this.state.home}`} activeStyle={{ color: "red" }} >
                                <img src={HomeIcon} className={this.state.activeHome?"active-icon":"icon"} alt="Home Icon" />
                                <p className="title" style={this.state.activeHome?{color:'black'}:{}}>Home</p>
                            </a>
                        </div>
                        <div className="col" onClick={() => this.changeActiveButton("categories")}>
                            <a className="link" href={`${this.state.category}`} activeClassName={"active"} >
                                <img src={CategoriesIcon} className={this.state.activeCategories?"active-icon":"icon"} alt="Categories Icon" />
                                <p className="title"  style={this.state.activeCategories?{color:'black'}:{}}>Categories</p>
                            </a>
                        </div>
                        <div className="col"  onClick={() => this.changeActiveButton("bag")}>
                            <a className="link" href={`${this.state.bag}`}>
                                <img src={BagIcon} className={this.state.activeBag?"active-icon":"icon"} alt="Bag Icon" />
                                <span className="icon-badge">{this.context.bagCount}</span>
                                <p className="title"  style={this.state.activeBag?{color:'black'}:{}}>Bag</p>
                            </a>
                        </div>
                        <div className="col" onClick={() => this.changeActiveButton("orders")}>
                            <a className="link" href={`${this.state.orders}`} >
                                <img src={OrderIcon} className={this.state.activeOrders?"active-icon":"icon"} alt="Orders Icon" />
                                <p className="title"  style={this.state.activeOrders?{color:'black'}:{}}>Orders</p>
                            </a>
                        </div>
                    </div>
                </nav>
            )
        }
    }
    export default Footer;
