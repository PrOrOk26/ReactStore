import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import LoginComponent from "./login/LoginComponent";
import MarketComponent from "./market/MarketComponent";
import LayoutComponent from "./LayoutComponent";
import CartComponent from "./cart/CartComponent"

import './MainApp.css';

const isAuthenticated = () => {
  if (window.localStorage.getItem('isLoggedIn'))
    return true
  return false
};

function MainApp() {
  return (
    <Router>
      <LayoutComponent>
        <Route strict path="/" render={() => (
          isAuthenticated() ? (
            <Redirect to="/market" />
          ) : (
              <Redirect to="/login" />
            )
        )}
        />
        <Route strict path="/login" component={LoginComponent} render={props => <LoginComponent {...props} />} />
        <Route strict path="/market" component={MarketComponent} render={props => <MarketComponent {...props} />} />
        <Route strict path="/cart" component={CartComponent} render={props => <CartComponent {...props} />} />
      </LayoutComponent>
    </Router>
  );
}

export default MainApp;
