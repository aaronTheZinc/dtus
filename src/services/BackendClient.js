import { promiseReject } from "../utils/misc"
import "whatwg-fetch"
import axios from 'axios';
import firebase from 'firebase'
import 'firebase/firestore'
import sgMail from '@sendgrid/mail'
import swal from 'sweetalert'

// import additionalSetUp from './'
class BackendClient {
 

   postShop = async(name, banner, logo) => {
   let data_object = {
       shopName: name,
       banner: banner,
       logo: logo
   }
    try {
        axios
  .post('https://us-central1-downtown-97d7d.cloudfunctions.net/getOrders?', {
    todo: 'Buy the milk'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
} catch(error) {
    
}

   }

    createStripe = async(uid) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        
            // axios.get('https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/createStripeConnect')
            const grab = new Promise((resolve, reject)=>{
            
                fetch(`https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/createStripeConnect?uid=${uid}`, {method: 'GET'})
                  .then(response => resolve(response.text()))
                  .then(data => console.log(data))
                  .catch(err => console.log('######',err))
                
              
            })
            const url = grab.then((val) => {
                console.log(val)
                 return val
            });
  window.open(await url.url)
        
        // window.open(url)
    }
    completeOnBoarding () {
        
    }
    
   linkShop = async (email, shopName) => {
  const postTo = new Promise((resolve) =>resolve(this.post('https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/linkCusAcc',{
    "email": email,
    "shopName": shopName
})));
    const res = postTo.then((val)=> {
      console.log('server response', val);
         return val
    })
    return await res
  
   }
    storeEmail = (userEmail) => {

        var db = firebase.firestore();

     

          db.collection('Emails').doc(userEmail).get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) {
        
      db.collection('users').doc('id')
        .onSnapshot((doc) => {
            swal("It looks like you have registered!", "It appears you have registered this email.", "error");
          // do stuff with the data
        });
    } else{
        db.collection("Emails").doc(userEmail).set({
            email: userEmail
         })
         .then(function(docRef) {
         
             console.log("Document written with ID: ", docRef.id);
         })
         .catch(function(error) {
             console.error("Error adding document: ", error);
         });
    }
  });

        

    }
    initialise = (dispatch) => {
        this.dispatch = dispatch
    }

    static checkStatusAndGetJSON = (fetchResponse) => {
        return fetchResponse.ok
            ? fetchResponse.json()
            : fetchResponse.json().then(promiseReject)
    }

    get = (method) => (path) => fetch(path, {
        // mode: 'no-cors',
        headers: {
            Accept: "application/json"
        },
        method
    }).then(BackendClient.checkStatusAndGetJSON).catch(error => undefined)

    postPut = (method) => (path, body) => axios
    .post(path,body)
    .then(response => { console.log(response)
       return response;
    })
    .catch(error => {
        console.log(error)
    })

    get = this.get("GET")
    post = this.postPut("POST")

    getOrders = (uid) => this.get(`https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/getOrders/?uid=${uid}`)
    fufillOrder = (uid, order) => this.get(`https://us-central1-downtown-97d7d.cloudfunctions.net/fufillOrder?uid=${uid}&id=${order}`)
    addNewProduct = (product) => this.post("https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/uploadProduct?uid=OrJQPF16xbOVBe3L66FqUhJ8HIa2",product)
    getProfile = (uid) => this.get(`https://us-central1-downtown-97d7d.cloudfunctions.net/sellerProfile?uid${uid}`)
    postEmail = (email) => this.post('https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/register', {body:{email:'email'}})
}

export default new BackendClient()