import React, {useEffect} from "react";
import { connect } from "react-redux";
import Spinner from "../layout/spinner/Spinner"
import {
    getProfileById
} from "../../actions/profile";
import {
    Button,
    ButtonToolbar,
    Icon
} from "rsuite";


const Profile = ({ history , profile:{ showProfile }, getProfileById, auth:{isAuthenticated, user} }) =>{
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
            <section>
                <ButtonToolbar>
                    <Button onClick={()=> history.push("/developers")}><Icon icon="arrow-circle-left"/> Back to developers</Button>
                    { isAuthenticated && (showProfile.user._id.toString() === user._id.toString()) && <Button color="blue" onClick={()=> history.push("/update-profile")}><Icon icon="edit"/> Edit profile</Button>}
                </ButtonToolbar>
            </section>
        )
    )
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps,  {
    getProfileById
} )(Profile);