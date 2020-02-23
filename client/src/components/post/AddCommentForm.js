import React , { useState } from "react";
import{
    Input,
    Icon,
    Button
}from "rsuite";

const AddCommentForm = ({ addComment , postId, getPost })=>{
    const [text ,setText ] = useState("");
    const onChange = (text)=>{
        setText(text);
    }
    const onAddComment = async ()=>{
        await addComment(text, postId);
        await getPost(postId)
        setText("")
    }
    return(
        <div className="add_comment">
            <Input 
                componentClass="textarea"
                onChange={onChange}
                rows={5}
                style={{ width: '100%' }} 
                placeholder="Add Your Post" 
                value={text}
            />
            <Button 
                onClick={onAddComment} 
                color="green" 
                style={{'margin': '0.5rem 0 0 0.5rem'}}
            >
                <Icon icon="plus-square-o"/> Add Comment
            </Button>
        </div>
    )
}


export default AddCommentForm;