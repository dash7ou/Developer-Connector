import React  from "react";
import { Navbar, Icon } from "rsuite";

const NavbarHeader = ()=>{
    return(
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
    )
}



export default NavbarHeader