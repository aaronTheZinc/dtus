import BackendClient from "../services/BackendClient"
import Firebase from "../components/Firebase/firebase"
import Swal from 'sweetalert2'
import axios from 'axios'
export const FETCH_ORDERS_REQUEST = "FETCH_ORDERS_REQUEST"
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS"
export const FETCH_ORDERS_FAILURE = "FETCH_ORDERS_FAILURE"

export const fetchOrderRequest = () => ({
    type: FETCH_ORDERS_REQUEST
})

export const fetchOrderSuccess = (data) => ({
    type: FETCH_ORDERS_SUCCESS,
    data
})

export const fetchOrderFailure = () => ({
    type: FETCH_ORDERS_FAILURE
})

export const fetchOrders = (uid) => (dispatch) => {
    dispatch(fetchOrderRequest())
    BackendClient.getOrders(uid)
        .then((data) => {

            console.log('###', data)
            
           if(typeof data === undefined) {
            dispatch(fetchOrderSuccess({}))
           }else{
            dispatch(fetchOrderSuccess(data))
           }
        })
        .catch(error => {
            dispatch(fetchOrderFailure())
        })
}

export const addNewProduct = (uid,product) => (dispatch) => {

    axios
  .post('https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/uploadProduct?uid=OrJQPF16xbOVBe3L66FqUhJ8HIa2', product)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })

 alert('called')
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Please Wait..',
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
      })
    //   var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    //   };
      
    //   fetch("https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/uploadProduct?uid=OrJQPF16xbOVBe3L66FqUhJ8HIa2", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

    // BackendClient.addNewProduct(product)
    //     .then((data) => {
    //         if(data){

    //             Firebase.addProductResponse(uid,data)

    //             Swal.fire({
    //                 position: 'top-end',
    //                 icon: 'success',
    //                 title: 'Product has been saved',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //               })
    //               window.location.reload()
    //         }
    //     })
    //     .catch(error => {
    //             console.log("XXXX",error)
    //     })
}