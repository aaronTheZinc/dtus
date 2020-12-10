import React, { Component } from 'react'
import './main.css'
import { Formik } from 'formik';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import image from '../../constants/images/shop.jpeg'
import logo from '../../constants/images/logo.png'
import send from './index'
import fetch from 'node-fetch'
import BackendClient from '../../services/BackendClient'
import swal from 'sweetalert'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};






class Register extends Component {
constructor() {
    super()
    
    this.state = { visible: false };


}
    eventListner () {
        function ValidateEmail(mail) 
{

 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
 
    return (true)
  }
    alert("Please Entee a Valid Email.")
    return (false)
}
 let email = document.getElementById('inputField').value
 console.log(email)
if(ValidateEmail(email)) {
    BackendClient.storeEmail(email)
    swal("Thank You!", "You will be notified when we open up shop.", "success")
}
    }






    render() {
      swal("Downtown", "Downtown is a place to jump start your business! We offer a platform where creating a shop is simple and easy. Your shop will go live after you're first product and anyone with the app can purchase. The order instantly goes to your dashboard where you can ship your order off! ");
        
        return (

            <div>
      <div id='head'>
       {/* <img src={logo} style={{width: '50px', height:'50px'}}></img> */}
      </div>

      

          <div className="form-group">
           <img src={image} id='image' style={{height: '700px', width:'70%', marginLeft:'15%', marginTop: '40px', borderRadius:'15px'}}></img>

         
              <input id='inputField' type="email" className="form-control" placeholder="Enter email"style={{marginTop:'100px',height:'100px', width:'60%', marginLeft:'20%', textAlign: 'center', fontSize:'20px',outline:'black', borderColor:'black'}} />
          </div>

          <label style={{fontSize: '12px'}}>Enter your E-mail to be notified when we open.</label>

          <button id='submit' onClick={this.eventListner}  className="btn btn-primary btn-block"style={{backgroundColor:'black', marginTop:'150px',height:'100px', width:'70%', marginLeft:'15%', borderColor:'black',borderRadius:'40px', fontSize: '30px'}}>Register</button>
     
      </div>
 
    
        )
    }
}


export default Register