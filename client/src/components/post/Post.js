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

const Post = ({ history, getPost, clearPost, post:{post} })=>{
    useEffect(()=>{
        const postId = history.location.pathname.split("/")[2].toString();
        getPost(postId)
    }, [])
    const backPostsPage = ()=>{
        history.push("/posts")
        clearPost()
    }

    return(
        !post? <Spinner/> : <section>
            <Button onClick={backPostsPage}>Back to posts page</Button>
        </section>
    )
};

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {
    getPost,
    clearPost
})(Post);