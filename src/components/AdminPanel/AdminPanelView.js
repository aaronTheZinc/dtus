import React from "react"
import { Container, Row, Col, Button } from "shards-react"
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

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

function BuyerButton({ item }) {
  return (
    <Button
      className="bg-white shadow w-100 my-2 mx-4 py-4 rounded text-dark"
      style={{ borderColor: 'transparent' }}
    >
      <Row className="mx-2">
        <Col className="font-weight-normal">
          +${item.price.toFixed(2)}
        </Col>
        <Col className="font-weight-bold">
          {item.name}
        </Col>
      </Row>
    </Button>
  )
}

function BuyerList() {
const buyers = [{price: 12,name: 'John'}, {price: 120,name: 'Ryan',} ,{price: 39.99,name: 'April'}]
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

export default function AdminPanelView({ buyers }) {
  return (
    <Container fluid>
      <Row>
        <Col className="justify-content-center shadow border border-dark" xs="6" lg="3" style={sideBarStyle}>
          <BuyerList buyers={buyers} />
          <Row style={totalButtonStyle} className="bg-dark w-100 text-white">
            $2,092.41
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
              <Row style={{ justifyContent: 'center', height: '60%' }}>
                <Button theme="dark" className="bg-dark px-5" style={{
                  borderRadius: 20, marginTop: 'calc(100vh - 11rem - 148px)', fontSize: 20,
                  fontFamily: 'auto'
                }}>
                  Payout
                </Button>
              </Row>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  )
}