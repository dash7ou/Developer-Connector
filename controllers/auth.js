const User = require('../models/User');
const ErrorResponse = require("../utils/errorResponse");
const { validationResult } = require('express-validator');
const asyncFun = require("../middleware/async");

exports.loginUser= asyncFun( async (req, res, next)=>{
    const errors = validationResult(req);
    let error;
    if(!errors.isEmpty()){
        error = {
            type: 'validationError',
            statusCode: 400,
            errors: errors.array()
        }

        throw new ErrorResponse('', error);
    }
    const {
        body: {
            email,
            password
        }
    } = req;

    const user = await User.findOne({ email }).select('+password');
    if(!user){
        error = {
            type: 'onlyMessage',
            statusCode: 400,
            message: 'Please signup first'
        }

        throw new ErrorResponse("", error);
    }

    const isMatch = await user.matchPassword(password);
    if(!isMatch){
        error = {
            type: 'onlyMessage',
            statusCode: 400,
            message: 'Password invalid.'
        }

        throw new ErrorResponse('', error)
    }
    const token = user.getUserToken();

    return res.status(200).header("x-auth-token", `Bearer ${token}`).send({
        message: 'login success',
    })
})

exports.getUserProfile = (req, res, next)=>{
    const { user: {
        _id,
        email,
        avatar,
        name,
        createdAt,
        updatedAt
    } } = req;
    res.send({
        _id,
        name,
        email,
        avatar,
        createdAt,
        updatedAt
    })
}