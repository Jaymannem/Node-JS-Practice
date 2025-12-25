const fs = require('fs');

try {
    const files = fs.readdirSync("data");
    console.log("files", files)
} catch(error) {
    console.log("Error in read directory", error)
}