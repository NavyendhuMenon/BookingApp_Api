const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const activityRoutes = require("./routes/activityRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
require("dotenv").config();

const app = express();
connectDB();
app.use(cookieParser());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running 🎉");
// });

app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
