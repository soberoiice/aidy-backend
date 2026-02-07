const mongoose = require("mongoose");

const FlashcardSchema = new mongoose.Schema({
  material: { type: mongoose.Schema.Types.ObjectId, ref: "StudyMaterial" },
  question: String,
  answer: String,
}, { timestamps: true });

module.exports = mongoose.model("Flashcard", FlashcardSchema);
