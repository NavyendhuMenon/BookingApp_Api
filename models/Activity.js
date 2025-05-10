const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
  code: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
