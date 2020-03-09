import React, { useEffect } from 'react';
import Spinner from '../layout/spinner/Spinner';
import { Button, Icon } from 'rsuite';
import { connect } from 'react-redux';
import {
	getPost,
	clearPost,
	addComment,
	deleteComment,
	addCommentSocket,
	getPosts
} from '../../actions/post';
import AddCommentForm from './AddCommentForm';
import CommentItem from './CommentItem';
import openSocket from 'socket.io-client';

const Post = ({
	history,
	getPost,
	clearPost,
	addComment,
	deleteComment,
	addCommentSocket,
	getPosts,
	post: { post, posts },
	auth: { user: { _id: userLogin } }
}) => {
	const postId = history.location.pathname.split('/')[2].toString();
	useEffect(() => {
		const socket = openSocket('http://localhost:5000');
		socket.on('comment', (data) => {
			if (data.action === 'create') {
				addCommentSocket(data.post);
				getPost(postId);
			} else if (data.action === 'delete') {
				getPost(postId);
			}
		});

		getPost(postId);
	}, []);
	const backPostsPage = () => {
		history.push('/posts');
		clearPost();
	};
	const getUser = () => {
		let user;
		if (!post.user._id) {
			user = post.user.toString();
			return user;
		}
		user = post.user._id.toString();
		return user;
	};
	const getProfile = () => {
		const user = getUser();
		history.push(`/developers/${user}`);
	};

	return post && typeof post.user === 'object' ? (
		<section>
			<Button onClick={backPostsPage}>
				{' '}
				<Icon icon='arrow-circle-left' /> Back to posts page
			</Button>
			<div className='post'>
				<div className='post__user-photo'>
					<img src={post.avatar} onClick={getProfile} />
					<p>{post.user.name}</p>
				</div>
				<div className='post_info single'>
					<p className='post_text'>{post.text}</p>
					<div className='post_disc'>
						<p className='post-date'>{post.createdAt}</p>
					</div>
				</div>
			</div>
			<AddCommentForm addComment={addComment} postId={postId} getPost={getPost} />
			<div className='comment-items'>
				{post.commit.length > 0 &&
					post.commit.map((comment) => (
						<CommentItem
							comment={comment}
							key={comment._id}
							deleteComment={deleteComment}
							userLogin={userLogin}
							post={post._id}
							history={history}
							getPost={getPost}
						/>
					))}
			</div>
		</section>
	) : (
		<Spinner />
	);
};

const mapStateToProps = (state) => ({
	post: state.post,
	auth: state.auth
});

export default connect(mapStateToProps, {
	getPost,
	clearPost,
	addComment,
	deleteComment,
	getPosts,
	addCommentSocket
})(Post);
