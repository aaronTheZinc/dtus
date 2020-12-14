import React,{ useEffect, useState } from "react"
import { Container, Row, Col, Button } from "shards-react"
import logo from './logo.svg';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {detailPannel} from './detailPannel'
import Graph from './graph'
import axios from 'axios'
import {MYloader} from '../LoadingScreen/Loader'
const sideBarStyle = {
  height: '100vh',
}

const totalButtonStyle = {
  position: 'absolute',
  bottom: 0,
  height: 60,
  alignContent: 'center',
  justifyContent: 'space-around',
  fontSize: 20,
  fontFamily: 'auto'
}

const buyerListStyle = {
  justifyContent: 'space-around',
  fontSize: 14,
}
 
// const detailPannell = () => {
//   const user  = {
//     name: {
//       firstName: "Aaron",
//       lastName: "Marsh",
//         address: {
//           address: "5320 W Outer Dr",
//           city: 'Detroit',
//           state: "Mi",
//           zip:"48221",

//         }
//     }



function BuyerButton({ item }) {
  return (
    <div
      className="bg-white shadow w-100 my-2 mx-4 py-4 rounded text-dark"
      style={{ borderColor: 'transparent',  }}
    >
      <Row className="mx-2">
        <Col className="font-weight-normal">
          +${item.price.toFixed(2)}
        </Col>
        <Col className="font-weight-bold">
          {item.name}
        </Col>
      </Row>
    </div>
  )
}

function BuyerList(data) {
  const {buyers} = data
  console.log('buyers -->', buyers)
// const buyers = [{price: 12,name: 'John'}, {price: 120,name: 'Ryan',} ,{price: 39.99,name: 'April'}]
  return (
    <div style={{ overflowY: 'auto', maxHeight: 'calc(100% - 60px)', marginTop: 16, overflowX: 'hidden' }}>
      {buyers.map(item => (
        <Row style={buyerListStyle}>
          <BuyerButton item={item} />
        </Row>
      ))}
    </div>
  )
}

class AdminPanelView extends React.Component{
  // const classes = useStyles();
  constructor(props) {
super(props)
  this.state = {
    buyers: null,
    didLoad: false,
    balance: 0
  }
  this.getDash = this.getDash.bind(this)

  }

 async componentDidMount() {
  const data = await this.getDash();
    const {history, balance ,shop} = data;
        // const bal = Number(balance);
        //   const formated_bal = `$ ${bal.toFixed(2)}`
     this.setState({buyers:history,balance:balance, didLoad:true})
 }
 async getDash () {
   const promise = new Promise((resolve, reject)=> {
    axios.get('https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/stripe/dash')
    .then(function (response) {
  
        const {data} = response
      // handle success
      console.log(response);
        resolve(data)
     
  
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
   })

    const result = promise.then((val => val));
       
       return await result
  
} 

  render () {
    const {buyers, didLoad, balance} = this.state
         if(didLoad) {
           return (
    <Container fluid style={{backgroundColor: 'white'}}>
      <Row>
        <Col className="justify-content-center shadow border border-dark" xs="6" lg="3" style={sideBarStyle}>
          <BuyerList buyers={buyers} />
          <Row style={totalButtonStyle} className="bg-dark w-100 text-white">
            {balance}
          </Row>
        </Col>
        <Col xs="6" lg="9">
          <div className="shadow rounded h-100 mx-5" style={{ maxHeight: 'calc(100% - 4rem)', marginTop: '2rem' }}>
            <Col>
              <Row className="text-dark justify-content-center pt-5" style={{ alignItems: 'center' }}>

                <Col xs="12" lg="5" />
                <Col xs="12" lg="2" className="font-weight-bold font-italic text-center" style={{ fontSize: 32, fontFamily: 'auto' }}>Dragon</Col>
                <Col xs="12" lg="5" className="text-center">
                  <img src={logo} alt="logo" />
                </Col>
              </Row>
              <Graph/> 
              <Row style={{ justifyContent: 'center', height: '60%' }}>
            
                <Button theme="dark" className="bg-dark px-5" style={{
                  borderRadius: 20, marginTop: '200px', fontSize: 20,
                  fontFamily: 'auto'
                }}>
                  Payout
                </Button>
              </Row>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>)
              }
              else {
                return <MYloader/>
              }      

              }
}

export  const AdminDash = () => <AdminPanelView/>
