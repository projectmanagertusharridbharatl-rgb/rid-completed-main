const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  appId: { type: String, unique: true },
  fullName: String,
  fatherName: String,
  dob: String,
  course: String,
  phone: String,
  email: String,
  duration: String,
  startDate: String,
  endDate: String,
  projectName: String,
  status: { type: String, default: "PENDING" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Application", applicationSchema);
