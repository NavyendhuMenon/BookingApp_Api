const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  activityId: { type: mongoose.Schema.Types.ObjectId, ref: "Activity" },
});

module.exports = mongoose.model("Booking", bookingSchema);
