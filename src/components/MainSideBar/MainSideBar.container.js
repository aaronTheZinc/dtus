import React from "react"
import { connect } from "react-redux"
import { MainSideBarView } from "./MainSideBarView"
// import { toogleSidebar } from "../../actions/commenAction"

class MainSideBar extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            menuVisible: false
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        // this.props.tooglex()
    }

    render() {
        return (
           
            <MainSideBarView toogleMenu={this.handleClick} menuVisible={this.state.menuVisible}/>
        )
    }

}

const mapStateToProps = () => ({
 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(MainSideBar)
