const express = require("express");
const morgan = require("morgan")

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get("/", (req, res)=> {
    res.send("Welcome Home")
})

app.listen(PORT, () => {
    console.log("Server is running on PORT: ", PORT)
})