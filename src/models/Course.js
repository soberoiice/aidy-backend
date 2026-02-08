const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  color: { type: String, default: "#2196F3" }, // Hex code for distinct course colors
  percentageComplete: { type: Number, default: 0 },
  flashcards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Flashcard" }],
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }], // You’ll need an Exercise model
  explanations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Explanation" }], // And an Explanation model
}, { timestamps: true });

module.exports = mongoose.model("Course", CourseSchema);
