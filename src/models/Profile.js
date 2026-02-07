const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  bio: String,
  aiTonePreference: String,
  learningMode: { type: String, enum: ["Text", "Quiz", "Visual"], default: "Text" },
}, { timestamps: true });

module.exports = mongoose.model("Profile", ProfileSchema);
