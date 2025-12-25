const fs = require("fs");
const path = require("path");

const createDataFolder = path.join(__dirname, "data");

if(!fs.existsSync(createDataFolder)) {
    fs.mkdirSync(createDataFolder);
    console.log("data folder is created")
} else {
    console.log("data folder is already exist")
}
