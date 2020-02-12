const ErrorResponse = require("../utils/errorResponse");
const asyncFun = require("../middleware/async");
const User = require("../models/User");
const Post = require("../models/Post");
const { validationResult } = require("express-validator");


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

    const post = await new Post(newPost);
    res.status(200).send(post);

})