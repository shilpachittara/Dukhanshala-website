import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './dukhanshala/pages/HomePage';
import Header from './dukhanshala/components/common/header/Header';
import Footer from './dukhanshala/components/common/footer/Footer';
import CategoryPage from './dukhanshala/pages/CategoryPage';
import ProductsPage from './dukhanshala/pages/ProductsPage';
import BagPage from './dukhanshala/pages/BagPage';
import OrdersPage from './dukhanshala/pages/OrdersPage';
import ProductDetailPage from './dukhanshala/pages/ProductDetailPage';


class NewRoutes extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header/>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage}/>

              <Route exact path="/categories" component={CategoryPage}/>
              <Route exact path="/newarrival" component={ProductsPage}/>
              <Route exact path="/grocery" component={ProductsPage}/>
              <Route  path="/product/detail" component={ProductDetailPage}/>

              <Route exact path="/bag" component={BagPage}/>
              <Route exact path="/orders" component={OrdersPage}/>
            </Switch>
          </div>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default NewRoutes;