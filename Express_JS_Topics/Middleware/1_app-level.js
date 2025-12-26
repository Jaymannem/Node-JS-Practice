const express = require("express");

const app = express();
const PORT = 3000;

const appLevelMiddleware = (req, res, next) => {
    console.log(`${req.method} request to ${req.url} at ${new Date().getFullYear()}`)
    next();
};

app.use(appLevelMiddleware)

app.get("/home", (req, res)=> {
    res.send("Welcome to Express js");
})

app.get("/home", (req, res)=> {
    res.send("About Page");
})

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT, ${PORT}`)
})