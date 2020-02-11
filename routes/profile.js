const express = require("express");
const route = express.Router();
const auth = require("../middleware/auth");
const { body } = require("express-validator");

const {
    getOwnProfile,
    createProfile
} = require("../controllers/profile")

route.get("/me",auth, getOwnProfile );
route.post("/",auth, [
    body("status", " Status is required").not().isEmpty(),
    body('skills', "Skills is required").not().isEmpty()
],createProfile)

module.exports = route;