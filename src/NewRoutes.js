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
      name: 'Shilpa Baby',
      categories: null,
      updateAppContext: this.updateAppContext,
      updateCategories: this.updateCategories
    }
  }
  updateAppContext = (val) => {
    this.setState({ name : val });
  };
  updateCategories = val =>{
    this.setState({ categories : val });
  }

  render() {
    return (
      <div>
        <AppContextProvider value={this.state}>
        <Router>
        <Header/>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage}/>

              <Route exact path="/categories" component={CategoryPage}/>
              <Route exact path="/Shilpa/newarrival" component={ProductsPage}/>
              <Route exact path="/Shilpa/grocery" component={ProductsPage}/>
              <Route  path="/product/detail" component={ProductDetailPage}/>

              <Route exact path="/bag" component={BagPage}/>
              <Route exact path="/otp" component={SendOtpPage}/>
              <Route exact path="/:otp/verify" component={VerifyOtpPage}/>
              <Route exact path="/orders" component={OrdersPage}/>
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