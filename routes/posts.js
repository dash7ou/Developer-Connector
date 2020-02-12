const express = require("express");
const route = express.Router();
const auth = require("../middleware/auth");
const { body } = require("express-validator");
const {
    createPost
} = require("../controllers/posts");



route.post("/", [
    body("text", "You must enter text for your commit").not().isEmpty()
], auth, createPost)

module.exports = route;