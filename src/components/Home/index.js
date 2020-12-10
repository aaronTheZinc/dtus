import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import Layout from "../Layout/Layout"
import DashBoard from "../Dashboard/Dashboard.container"

const HomePage = () =>  <DashBoard />


const condition = authUser => !!authUser;

export default compose(
  // withEmailVerification,
  withAuthorization(condition),
)(HomePage);
