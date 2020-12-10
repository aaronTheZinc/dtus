import React from "react"
import { connect } from "react-redux"
import { DashboardView } from "../Dashboard/DashboardView"
import { fetchOrders } from "../../Actions/dashBoardAction"
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import Backend from '../../services/BackendClient'
class DashBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            user: false
        }
    }

    componentDidMount() {

        const { userId, fetchOrders } = this.props
        this.props.firebase.getUserStat(userId).once('value', snapshot => {
            this.setState({ data: snapshot.val() !== null ? snapshot.val() : {} });
            // console.log(snapshot.val())
          });
        fetchOrders(userId)
    }

    render() {

        // const urlParams = new URLSearchParams(window.location.search);
        // const stripeCode = urlParams.get('code');
         
        // if(stripeCode) {
        //     console.log( stripeCode )
        //     Backend.completeOnBoarding(stripeCode)
        //  }

        return (
            <DashboardView
                data={this.state.data}
                orders={this.props.orders}

            />
        )
    }
}
const mapStateToProps = ({ dashboard, sessionState: { authUser: { uid } } }) => ({
    orders: dashboard.orders,
    userId: uid 
})

const mapDispatchToProps = (dispatch) => ({
    fetchOrders: (uid) => dispatch(fetchOrders(uid)),
})

export default compose(withFirebase, connect(mapStateToProps, mapDispatchToProps))(DashBoard)