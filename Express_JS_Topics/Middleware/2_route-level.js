const express = require("express");

const app = express();
const PORT = 3000;

const authMiddleware = (req, res, next) => {
    console.log("Authentication check running")
    let isAuth = true; 

    if(isAuth) {
        next();
    } else {
        res.status(401).send("Not allowed to access this page")
    }
}

app.get("/dashboard", authMiddleware, (req, res)=> {
    res.send("Welcome to Dashboard Page")
});

app.get("/", (req, res)=> {
    res.send("Home Page")
});

app.listen(PORT, () => {
    console.log("Server is running on PORT: ", PORT)
})