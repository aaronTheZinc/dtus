import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
// import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp/pages/Forms/index'
import Main from "../Main/Main"
import linkShop from '../ShopApply/pages/Forms/downtown'
import Link from '../ShopApply/pages/Forms/link'
import register from '../eRegister/register'
import completed from '../eRegister/completed'
// import PasswordForgetPage from '../PasswordForget';
// import HomePage from '../Home';
// import ProductPage from "../Products"
// import AdminPage from '../Admin';
import routes from "../../routes";
import './App.css';
import withTracker from "../../withTracker";
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import createShop from '../SignUp/pages/Forms/create-shop'
import mail from '@sendgrid/mail';
import '../SignUp/styles/index.css';
import checkOut from '../checkOut/mobile'

const App = () => (
  <div className="App">
    <Router>
      <div>
      
        <Route path={ROUTES.MAIN} component={Main} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={'/createShop'} component={createShop} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={'/checkout'} component={checkOut} />
        <Route path={'/register'} component={Link} />



        {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}

        {/* <Route exact path={ROUTES.LANDING} component={HomePage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.PRODUCTS} component={ProductPage} /> */}
        {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/> */}
     
        {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
      </div>
    </Router>
  </div>
   
);

export default withAuthentication(App);
