import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col, Button, FormSelect } from "shards-react"
import classNames from "classnames"
import { SidebarMainNavbar } from "../MainSideBar/SidebarMainNavbar"
import { SidebarNavItems } from "../MainSideBar/SidebarNavItems"

export const MainSideBarView = ({ menuVisible, toogleMenu }) => {
    const classes = classNames(
        "main-sidebar",
        "px-0",
        "col-12",
        menuVisible && "open"
    )
    return (

        <Col
            tag="aside"
            className={classes}
            lg={{ size: 2 }}
            md={{ size: 3 }}
        >
            <SidebarMainNavbar hideLogoText toogleMenu={toogleMenu} />
            <SidebarNavItems menuVisible={menuVisible} />
        </Col>
    )
}

MainSideBarView.propTypes = {

}

MainSideBarView.defaultProps = {

}
