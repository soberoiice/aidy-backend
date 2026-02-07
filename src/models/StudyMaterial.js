const mongoose = require("mongoose");

const StudyMaterialSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  filePath: String,
  subject: String,
  summary: String,
  uploadDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("StudyMaterial", StudyMaterialSchema);
