const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  material: { type: mongoose.Schema.Types.ObjectId, ref: "StudyMaterial" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  score: Number,
  questions: [{
    question: String,
    options: [String],
    correctAnswer: String
  }]
}, { timestamps: true });

module.exports = mongoose.model("Quiz", QuizSchema);
