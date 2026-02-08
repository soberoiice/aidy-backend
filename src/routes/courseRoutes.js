const express = require("express");
const router = express.Router();
const { createCourse, getCoursesByUser, getCourseById } = require("../controllers/courseController");

router.post("/create", createCourse); // Create a new course
router.get("/user/:userId", getCoursesByUser); // Get all courses for a user
router.get("/:id", getCourseById); // Get a single course by ID

module.exports = router;
