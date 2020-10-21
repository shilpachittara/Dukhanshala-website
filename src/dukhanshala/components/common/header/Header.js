import React from 'react';
import './Header.css';
import logo from '../../../assets/images/logo2.png'
import dukaanshala from '../../../assets/images/dukaanshala.png'
import Search from '../search/Search';
import { Link } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import * as HeaderServices from '../../../../services/HeaderServices'

class Header extends React.Component {
    static contextType = AppContext;
    constructor() {
        super();
        this.state = {
            storeName: null,
            globalPath: '',
            mobile: null,
            storeImage: logo,
            totalReferral: null,
            poweredBy: "Powered by",
            dukaanshalaLogo: true
        }
    }

    getStoreCode=()=>{
        var path;
        if (this.context.storeCode != null) {
            path = this.context.storeCode;
            this.getStoreDetail(path);
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
                    this.getStoreDetail(token);

                }
                else {
                    urlLength = lastIndexOf;
                    let token = url.slice(index, urlLength);
                    this.context.updateAppContext(token)
                    this.getStoreDetail(token);

                }

            }
            else {
                alert("try again")
            }

        }
    }

    componentDidMount() {
       this.getStoreCode()
    }

    getStoreDetail = async(val) => {
        let response =await HeaderServices.getStoreInfo(val);
        try {
            if (response &&response.status===200 && response.data ) {
                this.setState({
                    storeName: response.data.storeName,
                    mobile: response.data.mobile
                });
                if (response.data.totalReferral >= 5) {
                    var poweredBy = "";
                    this.setState({ poweredBy: poweredBy });
                    this.setState({ dukaanshalaLogo: false });
                }
                if (response.data.storeImage) {
                    var storeImage = response.data.storeImage;
                    this.setState({ storeImage: storeImage });
                }
                this.context.updateMinFreeDelivery(response.data.minFreeDelivery);
                this.context.updateDeliveryCharge(response.data.deliveryCharge);
            }
            else {

                //failure scenario
            }
        }
        catch (err) {
            alert(err)
        }



    };
    render() {
        return (
            <div className="sticky-top headerPanel">
                <div className="container">
                    <div className="row align-items-center" style={{ minHeight: "90px" }}>
                        <div className="col-auto">
                            <Link to={`${this.context.storeCode}`}><img className="logo" src={this.state.storeImage} alt="Dukhaanshala" /></Link>
                        </div>
                        <div className="col">
                            <div className="store-title">
                                <h3 className="logo-title">{this.state.storeName}</h3>

                                <p className="made-title">{this.state.mobile}</p>
                                <p className="made-title">{this.state.poweredBy} {this.state.dukaanshalaLogo ? (<img className="powered" src={dukaanshala} alt="Dukhaanshala" />) : null}</p>

                            </div>
                        </div>
            
                    </div>
                    <Search />
                </div>
            </div>
        )
    }
}


export default Header;
