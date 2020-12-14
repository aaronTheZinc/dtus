import React, {Component} from 'react'
import firebase from '../Firebase/firebase'
import Shop from './ShopView'
import { withAuthorization, withEmailVerification } from '../Session';
class ShopProduct extends Component {
     constructor(props) {
   super(props)
   console.log(this.props.userId)
   this.state = {

   }
     }
componentDidMount() {

}

    render() {

return (<Shop

/>)
    }
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(ShopProduct)