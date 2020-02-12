const express = require("express");
const route = express.Router();
const auth = require("../middleware/auth");
const { body } = require("express-validator");
const {
    createPost,
    getPosts,
    getPost,
    deletePost,
    likedPost,
    addCommit,
    deleteCommit
} = require("../controllers/posts");



route.get("/", auth , getPosts);
route.get("/:id", auth, getPost);


route.put("/liked/:id", auth, likedPost);
route.put("/commit/:id",[
    body("text","You must add text to your commit").not().isEmpty()
], auth, addCommit)

route.post("/", [
    body("text", "You must enter text for your commit").not().isEmpty()
], auth, createPost)

route.delete("/commit/:id/:commit_id", auth, deleteCommit)
route.delete("/:id", auth,deletePost )
module.exports = route;