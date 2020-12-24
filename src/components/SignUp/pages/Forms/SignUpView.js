import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './index.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import backgroundIm from '../Forms/images/background.png'
import {Paper} from '@material-ui/core'
import RF from './provider/index'
import mobileIm from '../Forms/images/mobile.png'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


// const backgroundIm = 'https://images.pexels.com/photos/1903964/pexels-photo-1903964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const RegisterForm = () => {
  const classes = useStyles();
  return (
    <div style={{display:'flex'}}>

      
  <div className='formView' >
    <div className='innerSU' style={{borderWidth:'3px',borderColor:'green'}} >
    <div style={{textAlign:'center'}}>
     <label id='headTag'> You are one step closer! </label>
    </div>
      <div style={{borderWidth:'3px', marginTop:'50px'}}>
    <form >
<div id='mobileImage'>

</div>
      <RF/>
      
    </form>
    </div>
    </div>
  
  </div></div>
)}





export const SignUpView = () => (
 <div className='signupcontainer'>
<div >
  <div className='signupcontainer'>
    <RegisterForm />

  </div>
 </div>

 </div>
)

