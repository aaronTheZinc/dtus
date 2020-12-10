import {MYloader} from "../LoadingScreen/Loader"
import React, {Component} from 'react'
import './index.css'
import axios from "axios"
import {loadStripe} from '@stripe/stripe-js'
import logo from './logo.png'
class checkOut extends Component {
    constructor() {
        super()
     this.state = {
         error: null
     }

    }

   async componentDidMount() {
        const stripe = await loadStripe('pk_test_LNY5fjEFqFhUORrCHueKrW26')
        try {
            const grab = new Promise((resolve, reject)=>{
                const urlParams = new URLSearchParams(window.location.search);
                
                const qaunity = urlParams.get('qaunity');
            
                const product = urlParams.get('product');

                const detail = urlParams.get('detail')

                const uid = urlParams.get('uid');
                
                console.log(detail)
            
                fetch(`https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/checkOutSession?qaunity=${qaunity}&productLoc=${product}&uid=${uid}&details=${detail}`, {method: 'GET'})
                  .then(response => resolve(response.text()))
                  .then(data => console.log(data))
                  .catch(err => console.log(err))
                
              
            })
            const key = grab.then((key)=> {
                // alert(key)
                stripe.redirectToCheckout({ sessionId: key })
            })
    }catch(e) {
        alert(e)
    }
}

    render(){
    
       if (!this.state.error){ return(
           
            <div>
                <div style={{backgroundColor: 'white'}}> <img  style={{width: '50px', height:'50px', marginLeft:'45%'}} src={logo}/></div>
               
                <label style={{fontSize:'40px', marginTop:'70px'}}>One moment</label>
                <div  style={{marginTop: '200px'}}>
                    <MYloader/>
                </div>
            </div>
        )}
        else {
            alert('errrr')
        }
        
    }
}

export default checkOut