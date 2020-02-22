import React from 'react';
import { ButtonGroup, Button, Icon } from 'rsuite';

const Post = ({ post, author, addLiked , deletePost}) => {
	const onLiked = async ()=>{
		const postId = post._id.toString();
		const user = author.toString()
		await addLiked(postId, user)
	}
	const onDeletePost = async ()=>{
		const postId = post._id.toString();
		await deletePost(postId)
	}

	return (
		<div className='post'>
			<div className='post__user-photo'>
				<img src={post.avatar} />
				<p>{post.user.name}</p>
			</div>
			<div className='post_info'>
				<div className='post_text'>{post.text}</div>
				<div className='post_disc'>
					<p className='post-date'>{post.createdAt}</p>
					<div className='post-buttons'>
						<ButtonGroup>
							<Button onClick={onLiked}>
								{post.likes.length}  <Icon icon='thumbs-o-up' />
							</Button>
							<Button color='green'>
								<span>{post.commit.length}</span> <Icon icon='commenting-o' /> Discussion
							</Button>
							{post.user._id.toString() === author.toString() && <Button color='red' onClick={onDeletePost}>
								<Icon icon='trash' />
							</Button>}
						</ButtonGroup>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;


/// @mutasem%2729@#$