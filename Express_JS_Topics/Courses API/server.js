require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db");
const courseRoutes = require("./routes/course-routes")

const app = express();
const PORT = process.env.PORT || 3000;

connectDB()

app.use(express.json());
app.use("/api/courses", courseRoutes)

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT)
})