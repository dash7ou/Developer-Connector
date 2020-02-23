import React from "react";
import NavbarHeader from "./NavbarHeader"
import { Navbar, Nav, Icon } from "rsuite";
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {
    logout
} from "../../../actions/auth";

import {
    clearProfile
} from "../../../actions/profile";

import {
    clearPosts
} from "../../../actions/post"

const AuthNav = ( {history, logout, clearProfile , clearPosts})=>{
    const clearAll = ()=>{
        logout();
        clearProfile();
        clearPosts()
    }
    return (
        <Navbar className="navbar" appearance="inverse">
            <NavbarHeader />            
            <Navbar.Body>
                <Nav pullRight>
                    <Nav.Item href="/dashboard" icon={<Icon icon="dashboard"/>} >Dashboard</Nav.Item>
                    <Nav.Item href="/developers" icon={<Icon icon="flow"/>}>Developers</Nav.Item>
                    <Nav.Item href="/posts" icon={<Icon icon="frame"/>}>Posts</Nav.Item>
                    <Nav.Item icon={<Icon icon="sign-out"/>} onClick={clearAll}>Logout</Nav.Item>
                </Nav>
            </Navbar.Body>
            
        </Navbar>
    )
};


AuthNav.propTypes ={
    logout: PropTypes.func.isRequired,
    clearProfile: PropTypes.func.isRequired
}

export default connect(null, {
    logout,
    clearProfile,
    clearPosts
} )(AuthNav);