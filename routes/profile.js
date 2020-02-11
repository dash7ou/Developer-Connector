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
    addExperience,
    deleteExperience,
    addEducation,
    deleteEducation
} = require("../controllers/profile")

route.get("/", getAllProfiles );
route.get("/user/:userId", getProfileByUserId );
route.get("/me",auth, getOwnProfile );
route.post("/",auth, [
    body("status", " Status is required").not().isEmpty(),
    body('skills', "Skills is required").not().isEmpty()
],createProfile)

route.put("/experience", auth , [
    body("title", " title is required").not().isEmpty(),
    body("company", " Your company is required").not().isEmpty(),
    body("from", "From data is required").not().isEmpty()
], addExperience)


route.put("/education", auth , [
    body("school", " Your school is required").not().isEmpty(),
    body("degree", " Your degree is required").not().isEmpty(),
    body("fieldofstudy", "field of your study is required").not().isEmpty(),
    body("from", "From data is required").not().isEmpty()
], addEducation);


route.put("/",auth,updateProfile)


route.delete("/experience/:exp_id", auth ,deleteExperience)
route.delete("/education/:edu_id", auth ,deleteEducation)
route.delete("/", auth, deleteProfile);

module.exports = route;