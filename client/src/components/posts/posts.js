import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner/Spinner';
import { getPosts } from '../../actions/post';
import Post from "./Post";


const Posts = ({ getPosts, post: { posts }}) => {
	useEffect(() => {
		getPosts();
	}, []);

    return !posts? <Spinner/>: (
        <section>
            <h1 className="posts-title">Posts</h1>
            <p className="posts__main-para">Welcome to the community</p>
            {
                posts.length>0 ? (
                    posts.map(post => <Post />)
                ):(<h5 className="posts-no">No post untill now</h5>)
            }
        </section>
    )
};

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps, {
	getPosts
})(Posts);
