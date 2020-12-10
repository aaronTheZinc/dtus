import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import {SignUpView} from "./SignUpView"
import cogoToast from "cogo-toast"

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  password:'',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const WEAK_PASSWORD = "auth/weak-password";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, password,passwordOne, isAdmin } = this.state;
    const roles = {};

    console.log(email,password)
    // if (isAdmin) {
    //   roles[ROLES.ADMIN] = ROLES.ADMIN;
    // }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        console.log(authUser)
        return this.props.firebase.setDefaultInUserSignUp(authUser.user.uid,email, password);
        // return this.props.firebase.user(authUser.user.uid).set({
        //   // username,
        //   email,
        //   // roles,
        // });
      })
      .then(() => {
        //return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        
        if(error.code === WEAK_PASSWORD){
          cogoToast.error("Password Should be At least 6 characters long")
        }
        else if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          cogoToast.error("An account with this E-Mail address already exists")
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value })
}

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      password,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (


      <SignUpView
      
      handleChange={this.handleChange}
      password={password}
      submit={this.onSubmit}
      email={email}
      
      />
      // <form onSubmit={this.onSubmit}>
      //   <input
      //     name="username"
      //     value={username}
      //     onChange={this.onChange}
      //     type="text"
      //     placeholder="Full Name"
      //   />
      //   <input
      //     name="email"
      //     value={email}
      //     onChange={this.onChange}
      //     type="text"
      //     placeholder="Email Address"
      //   />
      //   <input
      //     name="passwordOne"
      //     value={passwordOne}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="Password"
      //   />
      //   <input
      //     name="passwordTwo"
      //     value={passwordTwo}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="Confirm Password"
      //   />
      //   <label>
      //     Admin:
      //     <input
      //       name="isAdmin"
      //       type="checkbox"
      //       checked={isAdmin}
      //       onChange={this.onChangeCheckbox}
      //     />
      //   </label>
      //   <button disabled={isInvalid} type="submit">
      //     Sign Up
      //   </button>

      //   {error && <p>{error.message}</p>}
      // </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
