const jwt = require("jsonwebtoken");
const config = require("config");
const ErrorRespose = require("../utils/errorResponse");
const  asyncFun =require("./async");
const User = require("../models/User");

module.exports = asyncFun(async (req,res, next)=>{
    let error;
    let token = req.header('x-auth-token');
    if(!token){
        error={
            type: 'onlyMessage',
            statusCode: 401,
            message: "No token, authorization denied"
        }
        throw new ErrorRespose("", error);
    }
    token = token.split(' ')[1]

    try{
        const decode = jwt.verify(token, config.get("jwtSecret"));
        const user = await User.findById(decode._id);
        if(!user){
            error = {
                type: 'onlyMessage',
                statusCode: 401,
                message: 'authorization denied'
            }
            return next(new ErrorRespose("", error))
        }
        req.user = user;
        next();
    }catch(err){
        error = {
            type: 'onlyMessage',
            statusCode: 401,
            message: 'Not authorize to access this route'
        }
        return next(new ErrorRespose("", error))
    }

})