import React from "react"
import {
    Container,
    Navbar, Nav, NavItem, DropdownToggle, NavLink, Collapse, DropdownItem, Dropdown, DropdownMenu
} from "shards-react"
import classNames from "classnames"

export const TopNavBar = ({ displayName,layout, stickyTop, toggleUserActions, state, logout }) => {

    const classes = classNames(
        "main-navbar",
        "bg-white",
        stickyTop && "sticky-top"
    )
    var name = ''

    if (displayName === 'Null') {

     name = 'User'

    } else {

        name = displayName
    }
    return (
        <div className={classes}>
            <Container className="p-0" style={{ marginRight: "5px", maxWidth: "100%" }}>
                <Navbar type="light" className="align-items-center flex-md-nowrap p-0">

                    <nav className="nav" style={{ width: "100px" }} >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        {/* <a className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-inline text-center" style={{ margin: "0px" }}>
                            <i className="material-icons">&#xE5D2;</i>
                        </a> */}
                    </nav>

                    <div style={{ justifyContent: "center" }}>

                        <div style={{height:"auto" , width:"100px"}}>
                            <img
                                className="user-avatar rounded-circle mr-2"
                                src="/logo.png"
                                alt="User actiob"

                            />
                        </div>
                    </div>
                    <Nav navbar className="border-left flex-row" >
                        <NavItem tag={Dropdown} caret toggle={toggleUserActions}>
                            <DropdownToggle caret tag={NavLink} className="text-nowrap px-3" style={{ margin: "0px" }}>
                                <span className="d-none d-md-inline-block ">Hi, {name}</span>
                            </DropdownToggle>
                            <Collapse tag={DropdownMenu} right small open={state}>
                                <DropdownItem onClick={logout} className="text-danger">
                                    <i className="material-icons text-danger">&#xE879;</i> Logout
                            </DropdownItem>
                            </Collapse>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )

}

