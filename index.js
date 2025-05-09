const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes')
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());


// app.get("/", (req, res) => {
//   res.send("API is running 🎉");
// });


app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
