import React, { useEffect } from "react";
import {
    Button,
    Icon
} from "rsuite";


const CommentItem = ({history, comment, deleteComment, userLogin, post})=>{
    const {
        avatar,
        name,
        text,
        createdAt
    } = comment;
    const onDelete = async ()=>{
        const postId = post.toString();
        const commentId = comment._id.toString()
        await deleteComment(postId , commentId)
    }
    const onGetProfile = ()=>{
        const userId = comment.user.toString();
        history.push(`/developers/${userId}`)
    }
    
    return(
        <div className="comment">
            <div className="comment__avatar" onClick={onGetProfile}>
                <img src={avatar} alt="user_img"/>
                {name && <p className="comment__name">{name}</p>}
            </div>
            <div className="comment__info">
                <div>
                    <p className="comment__text">{text}</p>
                    <p className="comment_date">post on {createdAt}</p>
                </div>
                {(userLogin.toString() === comment.user.toString()) && <div className="comment_delete">
                    <Button color="red" onClick={onDelete}><Icon icon='trash' /></Button>
                </div>}
            </div>
        </div>
    )
}


export default CommentItem;