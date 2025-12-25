const fs = require("fs");

try {
    fs.appendFileSync("notes1.txt", "This is best node js course")
} catch(error) {
    console.log("Error in appending data")
}