import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            globalPath: ''
        }
    }
    componentDidMount() {
        this.updateStoreCode()

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
                    <div className="col">
                        <NavLink className="link" to={`${this.state.home}`} activeStyle={{ color: "red" }}>
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
                            <span className="icon-badge">{this.context.bagCount}</span>
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
