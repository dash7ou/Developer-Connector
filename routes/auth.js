const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const { 
    loginUser,
    getUserProfile
    } = require("../controllers/auth");
const  auth  = require("../middleware/auth");


router.get("/", auth, getUserProfile);
router.post("/", [
    body('email', 'Please includes a valid email').isEmail(),
    body('password', 'Please enter your password').exists()
],loginUser);


module.exports = router;