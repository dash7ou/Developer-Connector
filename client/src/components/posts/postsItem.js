import React from 'react';
import { ButtonGroup, Button, Icon } from 'rsuite';

const Post = ({ post, author, addLiked , deletePost , getPosts, history}) => {
	const onLiked = async ()=>{
		const postId = post._id.toString();
		const user = author.toString()
		await addLiked(postId, user)
	}
	const onDeletePost = async ()=>{
		const postId = post._id.toString();
		await deletePost(postId);
		await getPosts()
	}


	const show = ()=>{
		if(!post.user._id){
			return author && post.user.toString() === author.toString()
		}
		return author && post.user._id.toString() === author.toString()
	}

	let showDelete = show()

	const getProfile = ()=>{
		let user;
		if(!post.user._id){
			user = author && post.user.toString() 
		}
		user= author && post.user._id.toString()
		history.push(`/developers/${user}`)	
	}

	return (
		post && author && <div className='post'>
			<div className='post__user-photo'>
				<img src={post.avatar} onClick={getProfile}/>
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
							{showDelete && <Button color='red' onClick={onDeletePost}>
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