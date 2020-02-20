import React, {useEffect} from "react";
import { connect } from "react-redux";
import Spinner from "../layout/spinner/Spinner";
import {
    getProfiles
} from "../../actions/profile"

const Profiles = ({profile:{ profiles }, getProfiles})=>{
    useEffect(()=>{
        getProfiles();
    })

    return (!profiles ? (<Spinner />) :(
        profiles.map(profile => <div>test</div>)
    ))
}


const mapStateToProps =state => ({
    profile: state.profile
})

export default connect(mapStateToProps , {
    getProfiles
})(Profiles);