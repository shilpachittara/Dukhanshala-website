import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './dukhanshala/pages/HomePage';
import CategoryPage from './dukhanshala/pages/CategoryPage';
import ProductsPage from './dukhanshala/pages/ProductsPage';
import BagPage from './dukhanshala/pages/BagPage';
import SendOtpPage from './dukhanshala/pages/login/SendOtpPage';
import VerifyOtpPage from './dukhanshala/pages/login/VerifyOtpPage';
import OrdersPage from './dukhanshala/pages/OrdersPage';
import OrderDetailPage from './dukhanshala/pages/OrderDetailPage';
import CheckoutPage from './dukhanshala/pages/CheckoutPage';
import OrderConfirmPage from './dukhanshala/pages/OrderConfirmPage';
import ProductDetailPage from './dukhanshala/pages/ProductDetailPage';
import {AppContextProvider} from "./Context/AppContext";


class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeCode: null,
      categories: null,
      categoryId: null,
      productId: null,
      products: null,
      categoryName: null,
      mobile: null,
      orderId: null,
      minFreeDelivery: 0,
      deliveryCharge: 0,
      grandTotal: 0,
      total: 0,
      confirmResult: null,
      bag: {
        products:[],
        adrress:{}
      },
      bagCount: 0,
      name: null,
      address: null,
      cod: null,
      city: null,
      pincode: null,
      addedProdId:[],
      updateAppContext: this.updateAppContext,
      updateCategories: this.updateCategories,
      updateCategoryId: this.updateCategoryId,
      updateProducts: this.updateProducts,
      updateProductId: this.updateProductId,
      updateBag: this.updateBag,
      updateBagCount: this.updateBagCount,
      updateCategoryName: this.updateCategoryName,
      updateMobileNumber: this.updateMobileNumber,
      updateOrderId: this.updateOrderId,
      updateConfirmResult: this.updateConfirmResult,
      updateMinFreeDelivery: this.updateMinFreeDelivery,
      updateGrandTotal: this.updateGrandTotal,
      updateDeliveryCharge: this.updateDeliveryCharge,
      updateTotal: this.updateTotal,
      updateName:this.updateName,
      updateAddress:this.updateAddress,
      updateCity:this.updateCity,
      updatePincode:this.updatePincode,
      updateCod:this.updateCod,
      updateAddedProdId:this.updateAddedProdId
    }
  }
  updateAppContext = (val) => {
    this.setState({ storeCode : val });
  };
  updateCategories = val =>{
    this.setState({ categories : val });
  }
  updateCategoryId = val =>{
    this.setState({ categoryId : val });
  }
  updateProducts = val =>{
    this.setState({ products : val });
  }
  updateProductId = val =>{
    this.setState({ productId : val });
  }
  updateBag = val =>{
    this.setState({ bag : val });
  }
  updateBagCount = val =>{
    this.setState({ bagCount : val });
  }
  updateCategoryName = val =>{
    this.setState({ categoryName : val });
  }
  updateMobileNumber = val =>{
    this.setState({ mobile : val });
  }
  updateOrderId = val =>{
    this.setState({ orderId : val });
  }
  updateConfirmResult = val =>{
    this.setState({ confirmResult : val });
  }
  updateMinFreeDelivery = val =>{
    this.setState({ minFreeDelivery : val });
  }
  updateGrandTotal = val =>{
    this.setState({grandTotal : val });
  }
  updateDeliveryCharge = val =>{
    this.setState({deliveryCharge : val });
  }
  updateTotal = val =>{
    this.setState({total : val });
  }
  updateName = val =>{
    this.setState({name : val });
  }
  updateAddress = val =>{
    this.setState({address: val });
  }
  updateCity = val =>{
    this.setState({city : val });
  }
  updatePincode = val =>{
    this.setState({pincode : val });
  }
  updateCod = val =>{
    this.setState({cod : val });
  }
  updateAddedProdId = (val) => {
    this.setState({ addedProdId : val });
  }
  render() {
    return (
      <div>
        <AppContextProvider value={this.state}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/:store" component={HomePage}/>

              <Route exact path="/:store/categories" component={CategoryPage}/>
              <Route exact path="/:store/products/:category" component={ProductsPage}/>
              <Route  path="/:store/product/detail/:product" component={ProductDetailPage}/>
              <Route exact path="/:store/bag" component={BagPage}/>
              <Route exact path="/:store/otp" component={SendOtpPage}/>
              <Route exact path="/:store/:otp/verify" component={VerifyOtpPage}/>
              <Route exact path="/:store/checkout" component={CheckoutPage}/>
              <Route exact path="/:store/confirmation" component={OrderConfirmPage}/>
              <Route exact path="/:store/orders" component={OrdersPage}/>
              <Route exact path="/:store/order/detail" component={OrderDetailPage}/>
            </Switch>
          </div>
        </Router>
        </AppContextProvider>
      </div>
    );
  }
}

export default Routes;