import React from "react";
import NavbarHeader from "./NavbarHeader"
import { Navbar, Nav, Icon } from "rsuite";


const NotAuthNav = ()=>{
    return (
        <Navbar className="navbar" appearance="inverse" componentClass="div">
            <NavbarHeader />            
            <Navbar.Body>
                <Nav pullRight>
                    <Nav.Item href="/developers" icon={<Icon icon="flow"/>}>Developers</Nav.Item>
                    <Nav.Item href="/register" icon={<Icon icon="user-plus"/>}>Register</Nav.Item>
                    <Nav.Item href="/login" icon={<Icon icon="sign-in"/>} >Login</Nav.Item>
                </Nav>
            </Navbar.Body>
            
        </Navbar>
    )
};


export default NotAuthNav;