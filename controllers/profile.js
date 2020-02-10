const asyncFun = require("../middleware/async");
const User  = require("../models/User");
const Profile = require("../models/Profile");
const ErrorRespose= require("../utils/errorResponse");

exports.getOwnProfile = asyncFun( async (req, res, next)=>{
    let error;
    const {
        user:{
            _id: userId
        }
    } = req;

    const profile = await Profile.findOne({
        user: userId
    }).populate('user', ["name", "avatar"]);

    if(!profile){
        error = {
            type: 'onlyMessage',
            statusCode: 400,
            message: 'there is no profile for this user'
        }
        throw new ErrorRespose('', error)
    }

    res.status(200).send(profile);
})