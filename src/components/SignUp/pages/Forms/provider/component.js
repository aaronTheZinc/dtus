import React from "react"
import {
    Card,
    Button,
    ListGroup,
    ListGroupItem,
    Form,
    Row,
    Col,
    FormInput,
    Container
} from "shards-react"
import { Link } from "react-router-dom";
export const SignUpView = ({ handleChange, password, submit, email }) =>

    <Container className="main-content-container px-4" style={{ height: "100vh", display: "grid" }}>
        <Row>
            <Col style={{ margin: "auto" }}
                className="main-content p-3 "
                lg={{ size: 4 }}
                md="12"
                sm="12"
                tag="main"
            >
                <Card small className="mb-4 pt-3 bg-dark" >
                    {/* <CardHeader className="border-bottom text-center bg-dark"> */}
                    <div className="mb-3 mt-4 mx-auto">
                        <img
                            className="rounded-circle"
                            src="/logo.png"
                            width="110"
                        />
                    </div>
                    {/* </CardHeader> */}
                    <ListGroup flush>
                        <ListGroupItem className="p-4 bg-dark">
                            <Form onSubmit={submit}>
                                <Row>
                                    <Col className="form-group">
                                        <FormInput
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            required
                                            autoComplete="current-email"
                                            onChange={handleChange("email")}
                                            value={email}
                                        />
                                    </Col>
                                </Row>
                                <Row form>

                                    <Col className="form-group">
                                        <FormInput
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            required
                                            autoComplete="current-password"
                                            onChange={handleChange("password")}
                                            value={password}
                                        />
                                    </Col>
                                </Row>

                                <Button block theme="light" style={{ fontSize: "16px", fontWeight: "bold" }}>
                                    Sign Up
                                </Button>
                                <p className="auth-text">Have An Account?<Link to="/signin">Login</Link></p>

                            </Form>
                        </ListGroupItem>
                    </ListGroup>
                </Card>

            </Col>
        </Row>
    </Container>