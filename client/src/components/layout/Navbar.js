import React from "react";
import { Navbar, Nav, Icon, Dropdown } from "rsuite"


const MainNavbar = ()=>(
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
                <Nav.Item>Developers</Nav.Item>
                <Nav.Item>Register</Nav.Item>
                <Nav.Item>Login</Nav.Item>
            </Nav>
        </Navbar.Body>
  </Navbar>
);




/**
 * 
 *             <Nav>
                <Nav.Item icon={<Icon icon="connectdevelop" size="2x"/>} style={{fontSize: "5rem"}}>DevConnector</Nav.Item>
            </Nav>
 * 
 *         <Navbar.Header>
            <a href="#" className="navbar-brand logo">RSUITE</a>
        </Navbar.Header>
        connectdevelop
 */

export default MainNavbar;