import React from "react"
import { Container, Row, Col } from "shards-react"
import { connect } from "react-redux"
// import DashBoard from "./Pages/DashBoard/Dashboard.container"
import { TopNavBar } from "../TopNavBar/TopNavBar"
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';

import MainSidebar from "../MainSideBar/MainSideBar.container"
class Layout extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }

        this.toggleUserActions = this.toggleUserActions.bind(this)
    }

    toggleUserActions() {
        this.setState({
            visible: !this.state.visible
        })
    }

    logout = (event) => {
        event.preventDefault()
        this.props.firebase.doSignOut()
    }

    render() {
        const { children } = this.props
        return (
            <Container fluid className="dr-example-container">

                <Row>
                    <MainSidebar />
                    <Col
                        className="main-content p-0"
                        lg={{ size: 10, offset: 2 }}
                        md="12"
                        sm="12"
                        tag="main"
                    >
                        <TopNavBar
                            displayName={this.props.name}
                            logout={this.logout}
                            toggleUserActions={this.toggleUserActions}
                            state={this.state.visible} />
                        {children}

                    </Col>
                </Row>
            </Container>
        )
    }

}

const mapStateToProps = ({ sessionState: { authUser } }) => ({
    name: authUser !== null ? authUser.displayName : ""
})
const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default compose(
    withFirebase,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Layout);