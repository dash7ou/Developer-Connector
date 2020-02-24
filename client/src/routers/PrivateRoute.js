import React from "react";
import { connect } from "react-redux";
import { Route , Redirect} from "react-router-dom";

const PrivateRoute = ({ auth: {isAuthenticated, loading , user}, component: Component, ...rest})=>{
    return(
        !loading &&
        <Route {...rest} render={props =>
            isAuthenticated ? (
                <Component {...props} />
            ):(
                <Redirect to="/" />
            )
        }/>
    )
}


const mapStateToProps = state =>({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);