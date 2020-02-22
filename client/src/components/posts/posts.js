import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner/Spinner';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading }, auth:{ user} }) => {
	useEffect(() => {
		getPosts();
	}, []);

	return !user ? <Spinner /> : posts && <div>this is posts</div>;
};

const mapStateToProps = (state) => ({
    post: state.post,
    auth: state.auth
});

export default connect(mapStateToProps, {
	getPosts
})(Posts);
