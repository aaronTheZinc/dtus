import React from "react"
import { connect } from "react-redux"
import { MainNavBarView } from "./MainNavBarView"

class MainNavBar extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            menuVisible: false
        }

    }

    render() {
        return (
            <MainNavBarView />
        )
    }

}

const mapStateToProps = () => ({
 
})
const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar)
