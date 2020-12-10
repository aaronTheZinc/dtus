import React from "react";
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
let logo ;
const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const WEAK_PASSWORD = "auth/weak-password";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const complete = (email, password) => {
  alert('')
const Auth = Firebase.auth()
Auth.createUserWithEmailAndPassword(email,password).then(()=> {
alert('good')
})
.catch(error => {
        console.log(error)
  if(error.code === WEAK_PASSWORD){
    alert('weak ass shit')
    cogoToast.error("Password Should be At least 6 characters long")
  }
  else if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
    cogoToast.error("An account with this E-Mail address already exists")
    error.message = ERROR_MSG_ACCOUNT_EXISTS;
  }

  this.setState({ error });
});




}



class SignUp extends React.Component{
constructor(props) {
  super()
  this.screenState = props.screenState
  this.state = {
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
    secondaryErr:'Please fill out your shop name.'

    

  }
  this.setInput = this.setInput.bind(this)
  this.logoOnDrop = this.logoOnDrop.bind(this);
  this.bannerOnDrop = this.bannerOnDrop.bind(this);
  this.stage2 = this.stage2.bind(this); 
  this.fetchShop = this.fetchShop.bind(this);
  this.data = new Object()
  this.email =  ''


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


this.setState({bannerUL: true, banner: this.state.banner.concat(file)})


}

setInput (event, type) {
  this.data[type] = event.target.value
   console.log(this.data)
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
  let field1 = document.getElementById('firstName').value


      let input1 = field1.trim()
  let field2 = document.getElementById('lastName').value.trim()
  let field3 = document.getElementById('email').value.trim()
  let field4 = document.getElementById('password').value.trim()
       
  const emailIsValid = this.ValidateEmail(field3);
      if(!emailIsValid) {
        this.state.errText = 'Please enter a valid email.'
         this.setState({incomplete: true})
      } else {
      if(field1 !== '', field2 !== '', field3 !== false,field4 !== '') {
      

  this.setState({mainIsShow: false})
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
async stage2(event) {
event.preventDefault()

  const shopNameData = document.getElementById('shopName').value
     const shopName = shopNameData.trim()

     if(shopName !== '' ) {
       await this.fetchShop(shopName)
 
         if(this.state.shopExist === 'free') {
           
          this.gatherData()
          
          const url = await Backend.createStripe()

           this.setState({isComplete: true})
           this.UploadImages(this.state.logo, 'logo' )
           this.UploadImages(this.state.banner, 'banner' )

          complete(this.email, this.password)
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

  render() {

if (this.state.mainIsShow) {
 return (
    <main className="SignUpcontainer" >
      <HeroComponent
        title="Jump Start Your"
        titleTwo="Business"
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "overlay",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
        }}
      />
      <form className="form-container">
        <TitleComponent title="Sign up" />

        <section className="form-group-container" >
          <div className="form-row"style={{marginTop: '50px'}} >
            <div className="form-group">
              <input onChange={evt => this.setInput(evt, 'firstName')} id='firstName' type="text" required="required" />
              <label  for="input" className="control-label font-bold">
                First Name
              </label>
              <i class="bar"></i>
            </div>

            <div className="form-group">
              <input id='lastName' type="text" required="required"  onChange={evt => this.setInput(evt, 'lastName')}  />
              <label for="input" className="control-label font-bold">
                Last Name
              </label>
              <i class="bar"></i>
            </div>
          </div>

          <div className="form-group w-70">
            <input onChange={evt => this.setInput(evt, 'email')} id='email' type="text" required="required" />
            <label for="input" className="control-label font-bold">
              Email
            </label>
            <i class="bar"></i>
          </div>

          <div className="form-group w-70">
            <input onChange={evt => this.setInput(evt, 'password')} id='password' type="text" required="required" />
            <label for="input" className="control-label font-bold">
              Password
            </label>
            <i class="bar"></i>
          </div>
         
         {
           this.state.incomplete == true &&
           
           <div style={{textAlign:'center'}}>
           <div style={{ maxWidth: 500 , alignContent:'center', textAlign:'center'}}>
           
           <Alert severity="error">{this.state.errText}</Alert>
         </div>
         </div>
           
         }

          <div className="button-container">
            <a type="submit"  className="button"  onClick={this.click.bind(this)}>
              <span>Next</span>
            </a>
          </div>
        </section>
      </form>
    </main>)
}else {

  return (
    <main className="SignUpcontainer">
      <HeroComponent
        title="Create Your Shop and"
        titleTwo="add your Products!"
        // titleThree="Products!"
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "overlay",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
        }}
      />
      <form className="form-container">
        <TitleComponent title="Create Your Shop" />
        <section className="form-group-container">
          <div className="form-group w-70">
            <input id='shopName' type="text" required="required" />
            <label for="input" className="control-label font-bold">
              Shop Name
            </label>

            <i class="bar"></i>
            { !this.state.isComplete &&
            
           <div style={{textAlign:'center', marginTop:'40px'}}>
           <div style={{ maxWidth: 500 , alignContent:'center', textAlign:'center'}}>
           
            <Alert severity="error">{this.state.secondaryErr}</Alert>
         </div>
         </div>
            }
          </div>

          <div className="margin-top-auto">
            <div className="button-container">
              <button type="button" className="button button-file">
                <span>Add Shop Logo</span>
                {!this.state.logoIsUL &&
                <ImageUploader
                withIcon={false}
                buttonText="Choose images"
                onChange={this.logoOnDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif", 'jpeg']}
                maxFileSize={5242880}
               / >
                }
                {this.state.logoIsUL &&

<Alert severity="success">You Have Added Your Logo!</Alert>
                
                }
             
      {this.state.logoVisible &&
      <img style={{height:'100px', width:'100px'}} src={this.state.logo}></img>
      }
              </button>
            </div>

            <div className="button-container">
              <button type="button" className="button button-file">
                <span>Add Banner</span>
                {
                !this.state.bannerUL &&
                <ImageUploader
                withIcon={false}
                buttonText="Choose images"
                onChange={this.bannerOnDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif", 'jpeg']}
                maxFileSize={5242880}
               / >
                }
                {
                  this.state.bannerUL &&
                  
              
                  <Alert severity="success">You Have Added Your Banner!</Alert>
                }
              </button>
            </div>
          </div>

          <div className="button-container">
            <button type="submit" className="button" onClick={this.stage2}>
              <span>Complete</span>
            </button>
          </div>
        </section>
      </form>
    </main>
  );

}
  
   
       
        
      } 
  
};

export default SignUp;
