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
    getProfileByUserId
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


route.delete("/:id", auth, deleteProfile);
module.exports = route;