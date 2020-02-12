const ErrorResponse = require("../utils/errorResponse");
const asyncFun = require("../middleware/async");
const User = require("../models/User");
const Post = require("../models/Post");
const { validationResult } = require("express-validator");





exports.getPosts = asyncFun(async ( req , res , next) =>{
    const posts = await Post.find().sort({createdAt: -1});
    res.status(200).send(posts)
})


// exports.getPost = asyncFun(async (req ,res ,next)=>{

// })

exports.createPost = asyncFun( async (req, res, next)=>{
    const errors = validationResult(req);
    let error;
    if(!errors.isEmpty()){
        error = {
            type: 'validationError',
            statusCode: 400,
            errors: errors.array()
        }
        throw new ErrorRespose('',error)
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