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
import './index.scss'
const inputStyle = {
    borderWidth:'1px',
     borderColor:'black',
     borderRadiues:'10px'
}
// export const SignInView = ({ handleChange, password, submit, username }) =>

//     <Container className="main-content-container px-4" style={{ height: "100vh", display: "grid" }}>
//         <Row>
//             <Col style={{ margin: "auto" }}
//                 className="main-content p-3 "
//                 lg={{ size: 4 }}
//                 md="12"
//                 sm="12"
//                 tag="main"
//             >
//                 <Card small className="mb-4 pt-3 bg-dark" >
//                     {/* <CardHeader className="border-bottom text-center bg-dark"> */}
//                     <div className="mb-3 mt-4 mx-auto">
//                         <img
//                             className="rounded-circle"
//                             src="/logo.png"
//                             width="110"
//                         />
//                     </div>
//                     {/* </CardHeader> */}
//                     <ListGroup flush>
//                         <ListGroupItem className="p-4 bg-dark">
//                             <Form onSubmit={submit}>
//                                 <Row>
//                                     <Col className="form-group">
//                                         <FormInput
//                                             type="email"
//                                             id="email"
//                                             placeholder="Email"
//                                             required
//                                             autoComplete="current-email"
//                                             onChange={handleChange("email")}
//                                             value={username}
//                                         />
//                                     </Col>
//                                 </Row>
//                                 <Row form>

//                                     <Col className="form-group">
//                                         <FormInput
//                                             id="password"
//                                             type="password"
//                                             placeholder="Password"
//                                             required
//                                             autoComplete="current-password"
//                                             onChange={handleChange("password")}
//                                             value={password}
//                                         />
//                                     </Col>
//                                 </Row>

//                                 <Button block theme="light" style={{ fontSize: "16px", fontWeight: "bold" }}>
//                                     Login
//                                 </Button>
//                                 <p className="auth-text">Don't Have An Account? <Link to="/signup">Sign Up</Link></p>


//                             </Form>
//                         </ListGroupItem>
//                     </ListGroup>
//                 </Card>

//             </Col>
//         </Row>
//     </Container>

export const SignInView = ({submit, handleChange}) => (<div className='mainForm'>
    <div class="form">
    <div class="form-toggle"></div>
    <div class="form-panel one" >
        <div class="form-header">
            <h1>Account Login</h1>
        </div>
        <div class="form-content">
            <form>
                <div class="form-group"><label for="username">Email</label><input style={inputStyle} onChange={handleChange('email')} type="text" id="username" name="username" required="required" /></div>
                <div class="form-group"><label for="password">Password</label><input style={inputStyle} onChange={handleChange('password')} type="password" id="password" name="password" required="required" /></div>
                <div class="form-group"><button onClick={submit} type="submit">Log In</button></div>
            </form>
        </div>
    </div>
    <div class="form-panel two" style={{backgroundColor:'black'}}>
        <div class="form-header">
            <h1>Register Account</h1>
        </div>
        {/* <div class="form-content">
            <form>
                <div class="form-group"><label for="username">Username</label><input className='input' type="text" id="username" name="username" required="required" /></div>
                <div class="form-group"><label for="password">Password</label><input type="password" id="password" name="password" required="required" /></div>
                <div class="form-group"><label for="cpassword">Confirm Password</label><input type="password" id="cpassword" name="cpassword" required="required" /></div>
                <div class="form-group"><label for="email">Email Address</label><input type="email" id="email" name="email" required="required" /></div>
                <div class="form-group"><button type="submit">Register</button></div>
            </form>
        </div> */}
    </div>
</div>
</div>)