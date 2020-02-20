import React from "react";

const ProfilesItem = ({ profile })=>{
    return(
        <article className="dev-card">
            <div className ="dev-card__photo"></div>
            <div className="dev-card__info">
                
            </div>
            <div className="dev-card_skills"></div>
        </article>
    )
}


export default ProfilesItem;


/**
 * ocialmedia: {twitter: "kudfhksfhdkjha", facebook: "lkdsjdladkj", instagram: "kfjsdljkjasdflkjfdlaskjl"}
skills: (5) ["Html", "css", "js", "nodejs", "react"]
_id: "5e42e5c2e0759b1f42d9aaed"
user: {avatar: "https://s.gravatar.com/avatar/75d23af433e0cea4c0e45a56dba18b30?s=200&r=pg&d=mm", _id: "5e42e5a9e0759b1f42d9aaec", name: "admin"}
company: "Dash for development"
website: "www.dashzou.com"
location: "palestion - Gaza"
status: "Developer"
bio: "full stack developer and good man :P"
githubusername: "dash7ou"
experience: []
education: [{…}]
createdAt: "2020-02-11T17:34:58.170Z"
updatedAt: "2020-02-11T18:07:28.102Z"
 */