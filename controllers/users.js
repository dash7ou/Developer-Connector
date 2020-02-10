const User = require("../models/User");
const ErrorRespose = require('../utils/errorResponse');
const { validationResult } = require("express-validator");
const asyncFun = require("../middleware/async");

exports.postUser = asyncFun( async(req, res, next)=>{
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
    
    const {body: {
        email   
    }}= req;

    let user = await User.findOne({email});
    if(user){
        error = {
            type: 'onlyMessage',
            statusCode: 400,
            message: 'User is already exist'
        }

        throw new ErrorRespose('', error)
    }
    user = new User(req.body);

    await user.save();
    const token = user.getUserToken()

    return res.status(200).header("x-auth-token", `Bearer ${token}`).json({
        message: 'user created',
        user: user._id,
    })
});