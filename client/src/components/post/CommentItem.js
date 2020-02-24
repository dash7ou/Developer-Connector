import React from "react";


const CommentItem = ({comment})=>{
    const {
        avatar,
        name,
        text,
        createdAt
    } = comment
    return( 
        <div className="comment">
            <div className="comment__avatar">
                <img src={avatar}/>
                {name && <p className="comment__name">{name}</p>}
            </div>
            <div className="comment__info">
                <p className="comment__text">{text}</p>
                <p className="comment_date">post on {createdAt}</p>
            </div>
        </div>
    )
}


export default CommentItem;