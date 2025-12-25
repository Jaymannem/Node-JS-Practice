const fs = require("fs");

fs.unlink("notes.txt", (err)=> {
    if(err) throw err;
    console.log("File deleted")
})