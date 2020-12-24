import React, {Component,useState, useEffect} from 'react'
// import {GoogleLogin} from 'react-google-login'
import GoogleLoginButton from 'react-google-login-button'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
 const layout = {alignItems:'center',justifyContent:'center',display:'flex'}
 const GoogleAuth = ({next}) => (
    <div style={layout}>
    <GoogleLoginButton
    onClick={next}
        googleClientId='YOUR_GOOGLE_CLIENT_ID_HERE'
        onLoginSuccess={(googleUser) => {
          console.log('Replace this function to start using this information');
          console.log('Google User:', googleUser.getBasicProfile());
          console.log('ID token:', googleUser.getAuthResponse().id_token);
        }}
        onLoginFailure={() => console.log('Login failed')}
        width={250}
        height={60}
        longTitle={false}
        
        theme="light"
      /> 
      </div>
)
 const RegisterButton = ({onClick}) =>{
    const classes = useStyles();   
      
 return (
    <div style={layout}>
<Button onClick={onClick} style={{height:'60px'}} variant="contained" color="primary"> Continue With Downtown</Button>
      
    </div>
 )

 
}
  ///////// Maps buttons to form 

const Form = ({next}) => (
    <div>
         <GoogleAuth next={next}/>
       <div style={{marginTop:'50px'}}>
       </div>
      
    </div>
)

 class RegisterFlow extends Component {

constructor() {
    //point refers to the position of your register flow.
super();
 this.state = {
     point: 'select',
     width: null,
     height: null

 }
}
componentDidMount() {
    var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
    this.setState({width:x, height: y})
}
next = () =>{
alert()
    
}



    render() {
    const {point} = this.state

        switch(point) {
            case 'select':
                return(<div> <Form next={()=> this.next}/> 
                                <RegisterButton onClick={this.next.bind(this)}/>
                    </div>
                )
                break;
                case 'GOOGLE':
                    return null;
                   
                case 'Regular':

                    default:
                        return 
        }

    }
 }

export default RegisterFlow

