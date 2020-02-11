const asyncFun = require("../middleware/async");
const User  = require("../models/User");
const Profile = require("../models/Profile");
const ErrorRespose= require("../utils/errorResponse");
const { validationResult } = require("express-validator");

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
            statusCode: 404,
            message: 'there is no profile for this user'
        }
        throw new ErrorRespose('', error)
    }

    res.status(200).send(profile);
});


exports.getAllProfiles = asyncFun(async (req, res)=>{
    const profiles = await Profile.find().populate('user', ["name", "avatar"]);
    res.send(profiles);
})


exports.getProfileByUserId = asyncFun(async (req, res)=>{
    const {
        params:{
            userId
        }
    } = req;

    const profile = await Profile.findOne({
        user: userId
    }).populate('user', ["name", "avatar"]);

    if(!profile){
        error = {
            type: 'onlyMessage',
            statusCode: 404,
            message: 'Profile not found'
        }
        throw new ErrorRespose('', error)
    }

    res.send(profile);
})

exports.createProfile = asyncFun( async (req, res, next)=>{
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
        user:{
            _id: userId
        },
        body:{
            company,
            website,
            location,
            status,
            skills,
            bio,
            githubusername,
            youtube,
            twitter,
            facebook,
            linkedin,
            instagram
        }
    }= req;
    let profile = await Profile.findOne({
        user: userId
    })

    if(profile){
        error ={
            type:"onlyMessage",
            statusCode: 400,
            message: "You are have profile you can not create a new one"
        };

        throw new ErrorRespose("", error);
    };

    const profileFields = {};
    profileFields.user = userId
    if(company) profileFields.company = company;
    if(website) profileFields.website = website;
    if(location) profileFields.location = location;
    if(status) profileFields.status = status;
    if(bio) profileFields.bio = bio;
    if(githubusername) profileFields.githubusername = githubusername;

    if(skills){
        profileFields.skills = skills.split(",").map(skill => skill.trim());
    }

    profileFields.socialmedia = {};
    if(twitter) profileFields.socialmedia.twitter = twitter;
    if(facebook) profileFields.socialmedia.facebook = facebook;
    if(linkedin) profileFields.socialmedia.linkedin = linkedin;
    if(instagram) profileFields.socialmedia.instagram = instagram;
    if(youtube) profileFields.socialmedia.youtube = youtube;

    profile = new Profile(profileFields);
    await profile.save();

    if(!profile){
        error ={
            type:"onlyMessage",
            statusCode: 500,
            message: "Error Server"
        };

        throw new ErrorRespose("", error);
    }
    res.status(200).send(profile)
});


exports.updateProfile = asyncFun(async (req, res , next)=>{
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
        params:{
            id: profileId
        },
        user:{
            _id: userId
        },
        body
    } = req

    let profile = await Profile.findOne({
        user: userId,
        _id: profileId
    })


    if(!profile){
        error = {
            type: 'onlyMessage',
            statusCode: 404,
            "message": "this profile not found"
        }
        throw new ErrorRespose('',error)
    }

    profile = await Profile.findByIdAndUpdate(profileId, body, {
        new: true,
        runValidators: true,
    })

    res.status(200).send(profile)

})


exports.deleteProfile = asyncFun(async (req, res ,next)=>{
    const {
        params: {
            id: profileId
        },
        user: {
            _id: userId
        }
    } = req

    const profile = await Profile.findOne({
        _id: profileId,
        user: userId
    });


    if(!profile){
        error = {
            type: 'onlyMessage',
            statusCode: 400,
            "message": "There are problem in delete profile"
        }
        throw new ErrorRespose('',error)
    }

    await profile.remove();
    await User.findByIdAndRemove({_id : userId})
    res.status(200).send({
        message: "Delete success"
    })

})