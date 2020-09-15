
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../src/pages/user/HomePage'
import PrivacyPolicy from '../src/pages/user/PrivacyPolicy'
import TermsCondition from '../src/pages/user/TermsCondition'
import UserGuide from '../src/pages/user/UserGuide'
import UserGuideHindi from '../src/pages/user/UserGuideHindi'




class NewRoutes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/PrivacyPolicy" component={PrivacyPolicy}/>
              <Route exact path="/TermsCondition" component={TermsCondition}/>
              <Route exact path="/userguideen" component={UserGuide}/>
              <Route exact path="/userguidehi" component={UserGuideHindi}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default NewRoutes;