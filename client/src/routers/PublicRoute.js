import React from "react";
import { connect } from "react-redux";
import { Route , Redirect} from "react-router-dom";

const PublicRoute = ({ auth: {isAuthenticated, loading, user }, component: Component, ...rest})=>{
    return(
        !loading&& !user &&
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