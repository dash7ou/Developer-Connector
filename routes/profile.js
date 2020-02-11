const express = require("express");
const route = express.Router();
const auth = require("../middleware/auth");
const { body } = require("express-validator");

const {
    getOwnProfile,
    createProfile,
    updateProfile,
    deleteProfile,
    getAllProfiles,
    getProfileByUserId,
    addExperience
} = require("../controllers/profile")

route.get("/", getAllProfiles );
route.get("/user/:userId", getProfileByUserId );
route.get("/me",auth, getOwnProfile );
route.post("/",auth, [
    body("status", " Status is required").not().isEmpty(),
    body('skills', "Skills is required").not().isEmpty()
],createProfile)

route.put("/:id",auth, [
    body("status", " Status is required").not().isEmpty(),
    body('skills', "Skills is required").not().isEmpty()
],updateProfile)

route.put("/experience", auth , [
    body("school", " Your school is required").not().isEmpty(),
    body("degree", " Your degree is required").not().isEmpty(),
    body("fieldofstudy", "Field of your study is required").not().isEmpty(),
    body("from", " From date is required").not().isEmpty()
])

route.delete("/:id", auth, deleteProfile);
module.exports = route;