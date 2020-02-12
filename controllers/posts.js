const ErrorResponse = require("../utils/errorResponse");
const asyncFun = require("../middleware/async");
const User = require("../models/User");
const Post = require("../models/Post");
const { validationResult } = require("express-validator");





exports.getPosts = asyncFun(async ( req , res , next) =>{
    const posts = await Post.find().sort({createdAt: -1});
    res.status(200).send(posts)
})


exports.getPost = asyncFun(async (req ,res ,next)=>{
    let error;
    const {
        params :{
            id: postId
        }
    } = req;

    const post = await Post.findById(postId);
    if(!post){
        error = {
            type: 'onlyMessage',
            statusCode: 404,
            message: "Post not found."
        }
        throw new ErrorResponse('',error)
    }

    res.status(200).send(post);
})

exports.createPost = asyncFun( async (req, res, next)=>{
    const errors = validationResult(req);
    let error;
    if(!errors.isEmpty()){
        error = {
            type: 'validationError',
            statusCode: 400,
            errors: errors.array()
        }
        throw new ErrorResponse('',error)
    }


    const {
        user: {
            _id: userId,
            avatar
        },
        body:{
            text,
            name
        }
    } = req

    const newPost= {
        user: userId,
        text,
        name,
        avatar
    }

    const post = new Post(newPost);
    await post.save()
    res.status(200).send(post);
})


/**
 * @route   PUT /api/v1/posts/liked/:id
 * @desc    user liked post or remove his liked
 * @access  Private
 */

exports.likedPost = asyncFun( async (req, res, next)=>{
    const {
        user:{
            _id: userId
        },
        params:{
            id: postId
        }

    } = req;

    const post = await Post.findById(postId);
    if(!post){
        error = {
            type: 'onlyMessage',
            statusCode: 404,
            message: "Post not found."
        }
        throw new ErrorResponse('',error)
    }
    const isLiked = post.likes.find(like =>  like.user.toString() === userId.toString())
    if(isLiked){
        const index = post.likes.map(like => like.user).indexOf(userId);
        post.likes.splice(index, 1);
        await post.save();
        return res.status(200).send({
            message: "Remove like from post",
            post
        })
    }
    post.likes.unshift({
        user: userId
    });
    await post.save();
    res.status(200).send({
        message: "Liked post",
        post
    });


})
exports.deletePost = asyncFun(async (req, res , next)=>{
    const {
        user:{
            _id: userId
        },
        params:{
            id: postId
        }
    }= req;

    const post = await Post.findById(postId);
    if(!post){
        error = {
            type: 'onlyMessage',
            statusCode: 404,
            message: "Post not found."
        }
        throw new ErrorResponse('',error)
    }

    if(post.user.toString() !== userId.toString()){
        error = {
            type: 'onlyMessage',
            statusCode: 400,
            message: "There are problem."
        }
        throw new ErrorResponse('',error)
    }

    await post.remove();
    res.status(200).send({
        message: "Post deleted"
    })
})