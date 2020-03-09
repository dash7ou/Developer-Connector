const ErrorResponse = require("../utils/errorResponse");
const asyncFun = require("../middleware/async");
const Post = require("../models/Post");
const { validationResult } = require("express-validator");
const io = require("../socket")





exports.getPosts = asyncFun(async ( req , res , next) =>{
    const posts = await Post.find().populate('user', [ 'name' ]).sort({createdAt: -1});
    res.status(200).send(posts)
})


exports.getPost = asyncFun(async (req ,res ,next)=>{
    let error;
    const {
        params :{
            id: postId
        }
    } = req;

    const post = await Post.findById(postId).populate('user', [ 'name' ]);
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


    let post = new Post(newPost);
    await post.save()
    post = post.populate("user", ['name'])
    io.getIo().emit("posts", {action: "create", post})
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
    io.getIo().emit("posts", {action: "addLike", post})
    res.status(200).send({
        message: "Liked post",
        post
    });


})


/**
 * @route   PUT /api/v1/posts/commit/:id
 * @desc    user add commit to post
 * @access  Private
*/

exports.addCommit = asyncFun( async (req, res, next)=>{
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
        user:{
            _id: userId,
            avatar,
            name
        },
        params:{
            id: postId
        },
        body:{
            text
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
    post.commit.unshift({
        user: userId,
        text,
        name,
        avatar
    });
    await post.save();
    io.getIo().emit("comment", {action: "create", post})
    res.status(200).send({
        message: "Add Comment",
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
    const posts = await Post.find();
    io.getIo().emit("posts", { action: "delete", post: postId })
    res.status(200).send({
        message: "Post deleted"
    })
})


/**
 * @route   DELETE /api/v1/posts/commit/:id/:commit_id
 * @desc    delete commit
 * @access  Private
*/

exports.deleteCommit = asyncFun(async(req, res, next)=>{
    let error;
    const {
        user:{
            _id: userId
        },
        params:{
            id: postId,
            commit_id: commitId
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
    };


    const commit = post.commit.find(com => com._id.toString() === commitId.toString());
    if(!commit){
        error = {
            type: 'onlyMessage',
            statusCode: 404,
            message: "Comment not found."
        }
        throw new ErrorResponse('',error)
    }



    if(post.user.toString() === userId.toString()){

        const index = post.commit.map(com => com._id.toString()).indexOf(commitId.toString());
        post.commit.splice(index, 1);
    
        await post.save();
        io.getIo().emit("comment", {action: "delete", comment: commitId})

        return res.status(200).send(post)
    }

    

    if(commit.user.toString() !== userId.toString()){
        error = {
            type: 'onlyMessage',
            statusCode: 400,
            message: "There are problem."
        }
        throw new ErrorResponse('',error)
    }

    const index = post.commit.map(com => com._id.toString()).indexOf(commitId.toString());
    post.commit.splice(index, 1);

    await post.save();
    io.getIo().emit("comment", {action: "delete", comment: commitId})
    res.status(200).send(post)
})