import React from "react";
import AuthNav from "./AuthNav";
import NotAuthNav from "./NotAuthNav";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const MainNavbar = ( { auth: { isAuthenticated }})=>{
    return isAuthenticated ? <AuthNav /> : <NotAuthNav /> 
}

const mapStateToProps = state => ({
    auth: state.auth
});

MainNavbar.propTypes ={
    auth: PropTypes.object.isRequired
}

export default connect(mapStateToProps , null )(MainNavbar);