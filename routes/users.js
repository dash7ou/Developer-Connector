const express = require("express");
const route = express.Router();
const { body } = require("express-validator");
const {
    postUser
} = require("../controllers/users");

route.post("/", [
    body("name", "Name is required").not().isEmpty(),
    body("email", "Please enter a valid email.").isEmail(),
    body("password", "Please enter a password with 6 or more degites").isLength({min:6 , max: 200})
], postUser)

module.exports = route;