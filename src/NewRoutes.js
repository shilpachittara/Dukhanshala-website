import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './dukhanshala/pages/HomePage';
import Header from './dukhanshala/components/common/header/Header';
import Footer from './dukhanshala/components/common/footer/Footer';
import CategoryPage from './dukhanshala/pages/CategoryPage';
import ProductsPage from './dukhanshala/pages/ProductsPage';
import BagPage from './dukhanshala/pages/BagPage';
import SendOtpPage from './dukhanshala/pages/login/SendOtpPage';
import VerifyOtpPage from './dukhanshala/pages/login/VerifyOtpPage';
import OrdersPage from './dukhanshala/pages/OrdersPage';
import ProductDetailPage from './dukhanshala/pages/ProductDetailPage';
import {AppContextProvider} from "./Context/AppContext";


class NewRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeCode: null,
      categories: null,
      categoryId: null,
      productId: null,
      products: null,
      bag: 0,
      bagCount: null,
      updateAppContext: this.updateAppContext,
      updateCategories: this.updateCategories,
      updateCategoryId: this.updateCategoryId,
      updateProducts: this.updateProducts,
      updateProductId: this.updateProductId,
      updateBag: this.updateBag,
      updateBagCount: this.updateBagCount
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
              <Route exact path="/:store/orders" component={OrdersPage}/>
            </Switch>
          </div>
          <Footer/>
        </Router>
        </AppContextProvider>
      </div>
    );
  }
}

export default NewRoutes;