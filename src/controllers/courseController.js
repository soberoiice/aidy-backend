const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  try {
    const { userId, title, color } = req.body;
    const course = await Course.create({ user: userId, title, color });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCoursesByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const courses = await Course.find({ user: userId })
      .populate("flashcards")
      .populate("exercises")
      .populate("explanations");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id)
      .populate("flashcards")
      .populate("exercises")
      .populate("explanations");

    if (!course) return res.status(404).json({ message: "Course not found" });

    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
