import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import Layout from "../Layout/Layout"
import ProductAdd from "../ProductAdd/ProductAdd.container"

const ProductPage = () => <ProductAdd />
 


const condition = authUser => !!authUser;

export default compose(
    // withEmailVerification,
    withAuthorization(condition),
)(ProductPage);
