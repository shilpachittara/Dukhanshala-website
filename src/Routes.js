import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../src/pages/user/HomePage'
import PrivacyPolicy from '../src/pages/user/PrivacyPolicy'
import TermsCondition from '../src/pages/user/TermsCondition'
import UserGuide from '../src/pages/user/UserGuide'
import UserGuideHindi from '../src/pages/user/UserGuideHindi'




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
      updateTotal: this.updateTotal
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
  render() {
    return (
      <div>
        <AppContextProvider value={this.state}>
        <Router>
        <Header/>
          <div>
            <Switch>
              <Route exact path="/:store" component={HomePage}/>

              <Route exact path="/:store/categories" component={CategoryPage}/>
              <Route exact path="/:store/products/:category" component={ProductsPage}/>
              <Route exact path="/:store/grocery" component={ProductsPage}/>
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
          <Footer/>
        </Router>
        </AppContextProvider>
      </div>
    );
  }
}

export default Routes;