import React from "react";
import {
    Button,
    Icon
} from "rsuite"

const CommentItem = ({comment, deleteComment, userLogin, post})=>{
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
    return(
        <div className="comment">
            <div className="comment__avatar">
                <img src={avatar}/>
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