import React from "react";
import { connect } from "react-redux";
import { Route , Redirect} from "react-router-dom";

const PublicRoute = ({ auth: {isAuthenticated}, component: Component, ...rest})=>{
    return(
        <Route {...rest} render={props =>
            !isAuthenticated ? (
                <Component {...props} />
            ):(
                <Redirect to="/dashboard" />
            )
        }/>
    )
}


const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps)(PublicRoute);