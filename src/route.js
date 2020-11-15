import React from 'react';
import { Route } from 'react-router';

export default (
    <Route>
        <Route exact path="/:store" />
              <Route exact path="/:store/categories" />
              <Route exact path="/:store/products/:category" />
              <Route  path="/:store/product/detail/:product" />
              <Route exact path="/:store/bag" />
              <Route exact path="/:store/otp" />
              <Route exact path="/:store/:otp/verify" />
              <Route exact path="/:store/checkout" />
              <Route exact path="/:store/confirmation" />
              <Route exact path="/:store/orders" />
              <Route exact path="/:store/order/detail" />
              <Route exact path="/" />
              <Route exact path="/PrivacyPolicy" />
              <Route exact path="/TermsCondition" />
              <Route exact path="/userguideen" />
              <Route exact path="/userguidehi" />
    </Route>
); 