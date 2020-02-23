import React,{useEffect} from "react";
import Spinner from "../layout/spinner/Spinner";
import {
    Button
} from "rsuite";
import { connect } from "react-redux";
import {
    getPost,
    clearPost
}from "../../actions/post";
import AddCommentForm from "./AddCommentForm"

const Post = ({ history, getPost, clearPost, post:{post} })=>{
    useEffect(()=>{
        const postId = history.location.pathname.split("/")[2].toString();
        getPost(postId)
    }, [])
    const backPostsPage = ()=>{
        history.push("/posts")
        clearPost()
    }

    const getProfile = ()=>{
		let user;
		if(!post.user._id){
			user =post.user.toString() 
		}
		user= post.user._id.toString()
		history.push(`/developers/${user}`)	
	}

    return(
        !post? <Spinner/> : (
            <section>
                <Button onClick={backPostsPage}>Back to posts page</Button>
                <div className='post'>
                    <div className='post__user-photo'>
                        <img src={post.avatar} onClick={getProfile}/>
                        <p>{post.user.name}</p>
                    </div>
                    <div className='post_info single'>
                        <p className='post_text'>{post.text}</p>
                        <div className='post_disc'>
                            <p className='post-date'>{post.createdAt}</p>
                        </div>
                    </div>
                </div>
                <AddCommentForm />
            </section>
        )
    )
};

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {
    getPost,
    clearPost
})(Post);