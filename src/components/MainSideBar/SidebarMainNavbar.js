import React from "react"
import PropTypes from "prop-types"
import { Navbar, NavbarBrand } from "shards-react"

export const SidebarMainNavbar = ({ hideLogoText, toogleMenu }) => {
    return (
        <div className="main-navbar">
            <Navbar
                className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
                type="light"
            >
                <NavbarBrand
                    className="w-100 mr-0"
                    href="#"
                    style={{ lineHeight: "25px" }}
                >
                    <div className="d-table m-auto">
                        <img
                            id="main-logo"
                            className="d-inline-block align-top mr-1"
                            style={{ maxWidth: "50px" ,marginTop:"-8px" }}
                            src="/logo.png"
                            alt="Pengurus"
                        />
                        {!hideLogoText && (
                            <span className="d-none d-md-inline ml-1">
                                Downtown
                            </span>
                        )}
                    </div>
                </NavbarBrand>
                {/* eslint-disable-next-line */}
                <a
                    className="toggle-sidebar d-sm-inline d-sm-inline d-lg-none"
                    onClick={toogleMenu}
                >
                    <i className="material-icons">&#xE5C4;</i>
                </a>
            </Navbar>

        </div>
    )
}
