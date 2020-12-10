import React from "react"
import st from "./Loader.css"
import { Container, Row, Col } from "shards-react"
import classNames from "classnames"
export const MYloader = () => {


    return (
        <Container fluid className="main-content-container px-4" style={{ display: "flex", flexDirecton: "column", justifyContent: "center", alignItems: "center" }}>
            <Row>
                <Col sm="12" md="12" lg="12">
                    <div>
                        <div className="hm-spinner"></div>
                    </div>

                </Col>
            </Row>

        </Container>

    )
}
