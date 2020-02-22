import React from "react";
import {
    ButtonGroup,
    Button,
    Icon
} from "rsuite";

const Post = ({post})=>{
    return (
        <div className="post">
            <div className="post__user-photo">
                <img src={post.avatar}/>
                <p>{post.user.name}</p>
            </div>
            <div className="post_info">
                <div className="post_text">{post.text}</div>
                <div className="post_disc">
                    <p className="date">{post.createdAt}</p>
                    <div className="post-buttons">
                    <ButtonGroup>
                        <Button><Icon icon="thumbs-o-up" /></Button>
                        <Button><Icon icon="thumbs-o-down" /></Button>
                        <Button color="green">Discussion</Button>
                        <Button color="red"><Icon icon="trash"/></Button>
                    </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;