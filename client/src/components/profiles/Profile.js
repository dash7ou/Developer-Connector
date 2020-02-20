import React, {useEffect} from "react";
import { connect } from "react-redux";
import Spinner from "../layout/spinner/Spinner"
import {
    getProfileById
} from "../../actions/profile";


const Profile = ({ history , profile:{ showProfile }, getProfileById }) =>{
    useEffect(()=>{
        const {
            location:{
                pathname
            }
        } = history;
        const url = pathname.split("/");
        getProfileById(url[2])
    }, [])
    return (
        !showProfile ? <Spinner /> : (
            <div> {showProfile.company }</div>
        )
    )
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps,  {
    getProfileById
} )(Profile);