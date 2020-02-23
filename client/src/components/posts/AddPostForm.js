import React ,{useState} from "react";
import {
    Input,
    Button,
    Icon
}from "rsuite"

const AddPostForm = ({addPost, getPosts})=>{
    const [text, setText] = useState("")
    const onChange = (val)=>{
        setText(val)
    }
    const onAddPost = async ()=>{
        await addPost(text)
        await getPosts()
        setText("")
    }
    return(
        <div className="add-post">
            <Input 
                componentClass="textarea"
                onChange={onChange}
                rows={5} 
                style={{ width: '100%' }} 
                placeholder="Add Your Post" 
                value={text}
            />
            <Button onClick={onAddPost} color="green" style={{'margin': '0.5rem 0 0 0.5rem'}}><Icon icon="plus-square-o"/> Add Post</Button>
        </div>
    )
}

export default AddPostForm;