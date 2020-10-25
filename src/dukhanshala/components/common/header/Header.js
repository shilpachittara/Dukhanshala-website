import React from 'react';
import './Header.css';
import logo from '../../../assets/images/logo2.png'
import dukaanshala from '../../../assets/images/dukaanshala.png'
import Search from '../search/Search';
import { Link } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import * as HeaderServices from '../../../../services/HeaderServices'
import TextField from '@material-ui/core/TextField';
import * as SearchServices from '../../../../services/SearchServices'
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect } from "react-router-dom";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Divider } from '@material-ui/core';



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
            dukaanshalaLogo: true,
            options: [],
            storeId: "",
            prodId:null
        }
    }

    getStoreCode = () => {
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

    getStoreDetail = async (val) => {
        let response = await HeaderServices.getStoreInfo(val);
        try {
            if (response && response.status === 200 && response.data) {
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

    searchProduct = async (e) => {
        let data = {}
        data.storeCode = this.context.storeCode
        data.val = e.target.value
        if (e.target.value.length > 1) {
            try {
                let response = await SearchServices.getProductListBySearch(data)

                if (response.data.products) {


                    this.setState({ options: response.data.products })
                }
            }
            catch (e) { alert(e) }
        }



    }

    productDetail = (catName, catId, prodId) => {
        this.context.updateCategoryName(catName);
        this.context.updateCategoryId(catId);
        this.context.updateProductId(prodId);
        this.setState({prodId:prodId})
        this.setState({redirect:true})
     
    }
  


    render() {
        const { redirect } = this.state

        if (redirect)
            return (<Redirect to={{
                pathname:`${this.context.storeCode + "/product/detail/" + this.state.prodId}`
            }} />)

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
                    {/* <Search /> */}

                    {/* ============ */}
                    <div>
                        <TextField
                            label="Search Product"
                            id="outlined-size-small"
                            variant="outlined"
                            size="small"
                            style={{ width: '100%' }}
                            onChange={this.searchProduct}
                        />
                        {this.state.options.length > 0 &&
                            <div className="option-search">
                                {
                                    this.state.options.map((option, index) =>
                                    <div key={index} >

                                    <List>
                                        <ListItem style={{height:'50px'}}>
                                            <ListItemAvatar>
                                            
                                                   <img src={option.productImage} alt={option.categoryName} style={{width:'40px',height:'40px',borderRadius:'8px'}}/>
  
                                            </ListItemAvatar>
                                            <ListItemText onClick={() => { this.productDetail(option.categoryName, option.categoryId, option.productId) }} key={index}  primary={option.productName} secondary={option.sellingPrice} />
                                        </ListItem>
                                      
                                    </List>
                                    <Divider/>
                                  
                                    </div>
                                        // <MenuItem onClick={() => { this.productDetail(option.categoryName, option.categoryId, option.productId) }} key={index} style={{ zIndex: 10, fontWeight: 'bold' }}>{option.productName}</MenuItem>

                                    )
                                }
                            </div>
                        }
                    </div>
                    {/* ============ */}
                </div>
            </div>
        )
    }
}


export default Header;
