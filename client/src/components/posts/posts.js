import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
    getPosts
} from "../../actions/post";

const Posts = ({getPosts, post:{posts}}) =>{
    useEffect(()=>{
        getPosts()
    });

    return (
        <div>this is posts</div>
    )
}


const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {
    getPosts
})(Posts);