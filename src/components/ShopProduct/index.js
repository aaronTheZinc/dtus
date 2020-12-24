import React, {Component} from 'react'
import firebase from 'firebase'
import Shop from './ShopView'
import { withAuthorization, withEmailVerification } from '../Session';
class ShopProduct extends Component {
     constructor(props) {
   super(props)
   this.state = {
   uid:''
   }
     }
componentDidMount() {

}


    render() {
const  {uid} = this.state
return (<Shop
       uid={uid}
/>)
    }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(ShopProduct)