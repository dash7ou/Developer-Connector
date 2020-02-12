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
    console.log(post.user);
    console.log(userId)

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