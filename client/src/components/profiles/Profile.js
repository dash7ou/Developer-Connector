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
    }, []);


    return (
        !showProfile ? <Spinner /> : (
            <section>
                <ButtonToolbar>
                    <Button onClick={()=> history.push("/developers")}><Icon icon="arrow-circle-left"/> Back to developers</Button>
                    { isAuthenticated && (showProfile.user._id.toString() === user._id.toString()) && <Button color="blue" onClick={()=> history.push("/update-profile")}><Icon icon="edit"/> Edit profile</Button>}
                </ButtonToolbar>
                <article className="user-page">
                    <div className="user-page__main">
                        <img src={showProfile.user.avatar} />
                        <h1>{showProfile.user.name}</h1>
                        <h4>{showProfile.status} at {showProfile.company}</h4>
                        {showProfile.location && <p>{showProfile.location}</p>}
                        <div className="user-page__socialmedia">
                            {showProfile.website && <a><Icon icon="globe" size="2x"/></a>}
                            {showProfile.socialmedia.twitter && <a>  <Icon icon='twitter-square' size="2x" /> </a>}
                            {showProfile.socialmedia.facebook && <a> <Icon icon='facebook-square' size="2x"/> </a>}
                            {showProfile.socialmedia.linkedin && <a> <Icon icon='linkedin-square' size="2x"/> </a>}
                            {showProfile.socialmedia.instagram && <a> <Icon icon='instagram' size="2x"/> </a>}
                            {showProfile.socialmedia.youtube && <a> <Icon icon='youtube-play'size="2x" /> </a>}
                        </div>
                    </div>
                    <div className="user-page__about">
                        <div className="user-page__bio">
                            <h4>{showProfile.user.name.trim().split(" ")[0]} 's Bio</h4>
                            {showProfile.bio && <p>{showProfile.bio}</p>}
                        </div>
                        <div className="user-page__skills">
                            <h4>Skill Set</h4>
                            {showProfile.skills.map(skill => <span>{skill}</span>)}                     
                        </div>
                    </div>
                </article>
            </section>
        )
    )
}



/**
 * twitter(pin):"www.twitter.com"
facebook(pin):"www.fb.com"
linkedin(pin):"www.linkedin.com"
instagram(pin):"www.instegram.com"
youtube(pin):"www.youtube.com" 
 */
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps,  {
    getProfileById
} )(Profile);