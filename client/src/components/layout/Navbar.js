import React, { Fragment } from "react";
import { Navbar, Nav, Icon } from "rsuite";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    logout
} from "../../actions/auth";

const MainNavbar = ( { auth: { isAuthenticated } , logout })=>{
    const notAuthLinks = (
        <Fragment>
            <Nav.Item icon={<Icon icon="flow"/>}>Developers</Nav.Item>
            <Nav.Item href="/register" icon={<Icon icon="user-plus"/>}>Register</Nav.Item>
            <Nav.Item href="/login" icon={<Icon icon="sign-in"/>} >Login</Nav.Item>
        </Fragment>
    )

    const authLinks = (
        <Fragment>
            <Nav.Item icon={<Icon icon="sign-out"/>} onSelect={logout}>Logout</Nav.Item>
        </Fragment>
    )

    return (
        <Navbar className="navbar" appearance="inverse" componentClass="div">
            <Navbar.Header>
                <a href="#" className="navbar-brand logo" style={
                    {
                        "textAlign":"center",
                        "fontSize":"2rem",
                        "padding":"1rem"
                    }
                }
                >
                    <Icon icon="connectdevelop" size="2x"/> DevConnector
                </a>
            </Navbar.Header>
            <Navbar.Body>
                <Nav pullRight>
                    { isAuthenticated ? authLinks : notAuthLinks}
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});

MainNavbar.propTypes ={
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

export default connect(mapStateToProps , {
    logout
})(MainNavbar);