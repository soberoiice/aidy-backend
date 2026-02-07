const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["Student", "Educator", "Admin"], default: "Student" },
  studyGoals: [String],
  preferredSubjects: [String],
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
