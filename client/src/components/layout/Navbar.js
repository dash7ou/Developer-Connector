import React from "react";
import { Navbar, Nav, Icon, Dropdown } from "rsuite"


const MainNavbar = ()=>(
    <Navbar className="navbar" appearance="inverse" componentClass="div">
        <Navbar.Body>
            <Nav pullRight>
                <Nav.Item>Developers</Nav.Item>
                <Nav.Item>Register</Nav.Item>
                <Nav.Item>Login</Nav.Item>
            </Nav>
            <Nav>
                <Nav.Item icon={<Icon icon="connectdevelop" size="2x"/>} style={{fontSize: "5rem"}}>DevConnector</Nav.Item>
            </Nav>
        </Navbar.Body>
  </Navbar>
);



/**
 *         <Navbar.Header>
            <a href="#" className="navbar-brand logo">RSUITE</a>
        </Navbar.Header>
        connectdevelop
 */

export default MainNavbar;