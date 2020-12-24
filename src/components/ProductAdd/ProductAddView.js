import React from "react"
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ImageView from './imageUploader'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const Field = ({name}) => ( <div className="zip-form" style={{margin:'auto',padding:'10px'}}>

  <label htmlFor="zipcode">{name}</label>
  <input
    style={{width: '80%', borderRadius:'40px'}}
    className="form-control"
    type="input"
    name={name}/>

</div>)




const inputs = ['Product Title', 'Price']

export const ProductAddView = ({ productVariation ,productShipping,addProduct,onDrop, productName, productPrice, productCat, productDiscription ,handleChange}) => {
    return (
      <div id='main'style={{backgroundColor: 'white'}}>
        
      <div style={{display:'flex'}}>
      <div style={{float:'left', backgroundColor: 'white', width:'70%', height:'1000px'}}> </div>
   <ImageView/>
        <div style={{float:'right', backgroundColor: '#f2f2f2', width:'30%', height:'1000px'}}>
          <div style={{}}>

          {inputs.map(function(keyName, keyIndex) {
          return (
            <div>
              <inputs />
              <Field name={keyName} key={keyName} />
              <br></br>
          </div>
          )
      })
    }
          </div>
   
  
        </div>
      </div>
    </div>
    )
}