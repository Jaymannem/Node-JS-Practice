require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected Successfully!")
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
}

module.exports = connectDB;
