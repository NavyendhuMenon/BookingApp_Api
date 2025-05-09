const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
