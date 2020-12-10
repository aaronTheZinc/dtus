import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import Layout from './components/Layout/Layout';
import Layout2 from './components/Layout/Layout2';

// Route Views
import HomePage from './components/Home/index';
import SignUp from './components/SignUp/index'
import AccountDetail from './components/AccountDetail';
import ProductPage from './components/Products';
import ShopProduct from './components/ShopProduct';
import register from './preRegister/main'
import { SIGN_IN } from './constants/routes';
import Login from './components/SignIn'
import AdminDash from './components/AdminPanel/AdminPanelView'
import firebase from 'firebase'
 const uid = firebase.auth
export default [
  {
    path: '/',
    exact: true,
    layout: Layout,
    component: () => <Redirect to="/home" />,
  },
  {
    path: '/products',
    layout: Layout,
    component: ProductPage,
  },
  {
    path: '/login',

    layout: Layout,

    component: Login,
  },
 
  {
    path: '/home',
    layout: Layout,
    component: HomePage,
  },
  {
    path: '/login',
    layout: Layout2,
    component: HomePage,
  },
  {
    path: '/shop',
    layout: Layout,
    component: ShopProduct,
  },

  {
    path: '/accountdetail',
    layout: Layout,
    component: AdminDash,
  },
  {
    path: '/register',
    layout: Layout2,
    component: register

  },

];
