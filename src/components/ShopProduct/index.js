import React, {Component} from 'react'
import firebase from '../Firebase/firebase'
import Shop from './ShopView'

class ShopProduct extends Component {
     constructor(props) {
   super(props)
   this.state = {

   }
     }
componentDidMount() {
alert(this.state.uid)
}

    render() {

return (<Shop

/>)
    }
}
export default ShopProduct