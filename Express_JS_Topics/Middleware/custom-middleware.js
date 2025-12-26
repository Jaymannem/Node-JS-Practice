const express = require("express");

const app = express();
const PORT = 3000;

const timeStampLogger = (req, res, next)=> {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
}

app.use(timeStampLogger)

app.get("/", (req, res)=> {
    res.send("Home Page")
});

app.get("/about", (req, res)=> {
    res.send("About Page")
})

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT)
})