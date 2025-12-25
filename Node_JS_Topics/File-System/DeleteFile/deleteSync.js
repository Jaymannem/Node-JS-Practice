const fs = require("fs");

// fs.unlinkSync("notes1.txt");
// console.log("File deleted successfully")

try {
    fs.unlinkSync("notes1.txt");
    console.log("File deleted successfully")
} catch(error) {
    if(error.code === "ENOENT") {
        console.log("File does not exist");
    } else {
        throw error;
    }
}


