const jwt = require("jsonwebtoken");
const config = require("config");
const ErrorRespose = require("../utils/errorResponse");
const  asyncFun =require("./async");
const User = require("../models/User");

module.exports = asyncFun(async (req,res, next)=>{
    let token = req.header('x-auth-token');
    token = token.split(' ')[1]
    let error
    if(!token){
        error={
            type: 'onlyMessage',
            statusCode: 401,
            message: "No token, authorization denied"
        }
        throw new ErrorRespose("", error);
    }
    try{
        const decode = jwt.verify(token, config.get("jwtSecret"));
        const user = await User.findById(decode._id)
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