import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner/Spinner';
import { getPosts, addLiked, clearPosts, deletePost, addPost } from '../../actions/post';
import Post from "./postsItem";
import AddPostForm from "./AddPostForm";

const Posts = ({ getPosts,addLiked,deletePost,addPost, post: { posts }, auth:{user: {_id : author}}}) => {
    console.log(author)
	useEffect(() => {
        getPosts();
        return ()=>{
            clearPosts()
        }
	}, []);

    return !posts? <Spinner/>: (
        <section className="posts">
            <h1 className="posts-title">Posts</h1>
            <p className="posts__main-para">Welcome to the community</p>
            <AddPostForm addPost={addPost} getPosts={getPosts}/>
            {
                posts.length>0 ? (
                    posts.map((post,index) => <Post key={index} post={post} author={author} addLiked={addLiked} deletePost={deletePost} getPosts={getPosts}/>)
                ):(<h5 className="posts-no">No post untill now</h5>)
            }
        </section>
    )
};

const mapStateToProps = (state) => ({
    post: state.post,
    auth: state.auth
});

export default connect(mapStateToProps, {
    getPosts,
    addLiked,
    deletePost,
    addPost
})(Posts);
