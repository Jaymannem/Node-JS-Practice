const express = require("express");

const app = express();
const PORT = 3000;

const firstMiddleware = (req, res, next)=> {
    console.log("This will run on every request.");
    next();
}

app.use(firstMiddleware);

app.get("/", (req, res)=> {
    res.send("Home Page")
});

app.get("/about", (req, res)=> {
    res.send("Home Page")
})

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT)
})