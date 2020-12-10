import React from "react"
import { Container, Row, Col } from "shards-react"
import LeftCard from "../LeftCard/LeftCard"
import RightCard from "../RightCard/RightCard"
import Orders from "../Orders/Orders"
import {MYloader} from "../LoadingScreen/Loader"

 const revenueStyle = {
    fontSize: 30,
    color: 'black',
    'fontfamily': "Lato"
    
    
}
const headerStyle ={fontSize: 30,
    underline:  'underline'}

export const DashboardView = ({ data ,orders }) => {
    return (Object.keys(data).length !== 0  ?
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header pt-4">
                <Col sm="12" md="12" lg="12">
                <u>
                    <h1 style={headerStyle}>Total Profits</h1>
                    </u>
                </Col>
            </Row>
            
            <Row noGutters className="page-header py-4">
                <Col sm="12" md="12" lg="12">
                    <h1 style={revenueStyle}>$ {data.Analytics.totalRevenue}</h1>
                   
                </Col>
            </Row>
            <Row>
                <Col sm="12" md="12" lg="6" >
                    <LeftCard data={data} />
                </Col>
                <Col sm="12" md="12" lg="6">
                    <RightCard data={data} />
                </Col>

            </Row>
            <Row>
                <Col>
                    <Orders orders={orders}/>
                </Col>
            </Row>

        </Container> : <MYloader/>
    )
}