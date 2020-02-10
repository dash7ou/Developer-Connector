const express = require("express");
const route = express.Router();
const auth = require("../middleware/auth");

const {
    getOwnProfile
} = require("../controllers/profile")

route.get("/me",auth, getOwnProfile );


module.exports = route;