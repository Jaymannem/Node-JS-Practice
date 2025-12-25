const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("data folder is created");
} else {
    console.log("data folder is already exist")
}

// create a file inside data folder. 
const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(filePath, "This is the best node js tutorial");
console.log("data written successfully");


// read content from example.txt
const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log('Content: ', readContentFromFile)

// append data to the file 
fs.appendFileSync(filePath, "\nThank you for your support");
console.log("data appended successfully!")