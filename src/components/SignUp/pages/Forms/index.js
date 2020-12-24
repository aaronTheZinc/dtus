import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../../../Firebase';
import * as ROUTES from '../../../../constants/routes';
import * as ROLES from '../../../../constants/roles';
import {SignUpView} from "./SignUpView"

import HeroComponent from "../../components/hero.component";
import TitleComponent from "../../components/title.component";
import request from 'superagent'
// styles
import "../../styles/form.style.css";
import '../../styles/index.css'
import { ReactDOM } from 'react-dom'
import Backend from '../../../../services/BackendClient'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import ImageUploader from "react-images-upload";
import signUpHandle from './session'
import ImageHandler from '../../../ProductAdd/ProductAdd.container'
import { any } from "shards-react";
import Firebase from 'firebase'
import "firebase/auth";
import axios from 'axios'
import cogoToast from 'cogo-toast'
import { ClickAwayListener } from '@material-ui/core';

const SignUpPage = () => (
 
    <SignUpForm />

);


const INITIAL_STATE = {
  username: '',
  email: '',
  password:'',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
  mainIsShow: true,
  incomplete: false,
  logo: false,
  errText: 'Please fill out all fields.',
  logo: [],
  banner: [],
  bannerUrl: null,
  logoUrl: null,
  logoVisible: false,
  logoIsUL: false,
  bannerUL: false,
  shopName: '',
  isComplete: true,
  shopExist: false,
  email: '',
  pw: '',
  data: {

  },
  secondaryErr:'Please fill out your shop name.'

  
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

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);
     
    this.state = { ...INITIAL_STATE };
    this.data = {}
    this.setInput = this.setInput.bind(this)
  this.logoOnDrop = this.logoOnDrop.bind(this);
  this.bannerOnDrop = this.bannerOnDrop.bind(this);
  this.shopComplete = this.shopComplete.bind(this); 
  this.fetchShop = this.fetchShop.bind(this);
  this.click = this.click.bind(this)
  }
 async asyncCall () {
return await this.shopComplete()
 }
  onSubmit = event => {
    event.preventDefault()
      this.asyncCall()
      if(this.state.isComplete) {
          
      
  const email = this.data.email
  const password = this.data.password
    const roles = {};

    console.log(email,password)
    // if (isAdmin) {
    //   roles[ROLES.ADMIN] = ROLES.ADMIN;
    // }
if(this.state.isComplete)
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        Backend.createStripe(authUser.user.uid)
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
    } 
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
      mainIsShow,
      incomplete,
      isComplete,
      errText,
      secondaryErr,
      logoIsUL,
      bannerUL

    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (


      <SignUpView
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



  async UploadImages(files, type) {
    // console.log(files)
    const url = "https://api.cloudinary.com/v1_1/dtus-us/upload"
    const title = "downtown";

    let urlListPromise = new Array()

   

      
        for (let file of files) {
          const photoId = this.photoId++;
          const fileName = file.name;
    const secureUrl = request.post(url)
            .field('upload_preset', "lvjbvnjj")
            .field('file', file)
            .field('multiple', true)
            .field('folder', "downtown")
            .field('tags', title ? `downtown,${title}` : 'downtown')
            .field('context', title ? `photo=${title}` : '')
            .on('progress', (progress) => null)
            .end((error, response) => this.imagesUploaded(response, type))

        }
    

 
          
  

  // const imageLink = await Promise.all(urlListPromise.map((res)=> res.body.secure_url))
  //   console.log(imageLink)
  //   const completeUrl = await Promise.all(urlListPromise.map(async(url)=>  url))

  //   console.log(completeUrl)


}
imagesUploaded(response, type) {
  if(type ==='banner') {
    this.setState({bannerUrl: response.body.secure_url})
  }
  else {
    this.setState({logoUrl: response.body.secure_url})
  }

console.log(this.state.logoUrl, 'logo')
console.log(this.state.bannerUrl, 'banner')
}
logoOnDrop(file) {

  this.setState({logoIsUL: true,
           logo: this.state.logo.concat(file)
  })

  // logo = pictureFiles
  // this.setState({
  //   logo: URL.createObjectURL(event.target.files[0]),
  //   logoVisible: true

  // });
  

}
bannerOnDrop (file) {

alert()
this.setState({bannerUL: true, banner: this.state.banner.concat(file)})


}

setInput (event, type) {
  this.data[type] = event.target.value
   console.log(event.target.value)
}



 ValidateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  }

    return (false)
}
click (item) {

  // alert('click occured')


 
  const firstName = this.data.firstName
  const lastName = this.data.lastName
  const email = this.data.email
  const password = this.data.password
       
  const emailIsValid = this.ValidateEmail(email);
      if(!emailIsValid) {
        this.state.errText = 'Please enter a valid email.'
         this.setState({incomplete: true})
      } else {
      if( firstName !== '', lastName !== '',email !== '', password !== '') {
      

  this.setState({mainIsShow: false})
  alert()
  this.gatherData()
      } else {
        this.state.errText = 'Please fill out all fields.'
        this.setState({incomplete: true})

      }
    }
}

async fetchShop(id) {

  try {
    const {data }= await axios.get(
      `https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/shopExist?id=${id}`,
    );
   console.log(data)
   this.setState({shopExist: data});
  } catch (error) {
    // setError(error.data.response.message);
  }
}
async shopComplete(event) {
event.preventDefault()

  const shopNameData = document.getElementById('shopName').value
     const shopName = shopNameData.trim()

     if(shopName !== '' ) {
    await this.fetchShop(shopName)
 
         if(this.state.shopExist === 'free') {
          
      

          if(this.state.isComplete) {
          
      
            const email = this.data.email
            const password = this.data.password
              const roles = {};
          
              console.log(email,password)
              // if (isAdmin) {
              //   roles[ROLES.ADMIN] = ROLES.ADMIN;

              this.props.firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {

          
          const url = Backend.createStripe(authUser.user.uid)

          this.setState({isComplete: true})
          this.UploadImages(this.state.logo, 'logo' )
          this.UploadImages(this.state.banner, 'banner' )
       
  

                  // Create a user in your Firebase realtime database
                  console.log(authUser)
                  return this.props.firebase.setDefaultInUserSignUp(authUser.user.uid,email, password, this.data.firstName, this.data.lastName);
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
              } 
















         
         }else {
           this.setState({
             secondaryErr: 'Shop name is already in use.',
             isComplete: false
           })
         }


 console.log('#####', this.state.bannerUrl)
 

}else {
  this.setState({isComplete: false})
}
}
gatherData = () => {
  // const email = document.getElementById('email').value

      
        // const lastName = document.getElementById('email').value
         
        // this.data['lastName'] = document.getElementById('email').value

        // this.data['password'] = \


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
