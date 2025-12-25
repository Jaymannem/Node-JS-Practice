const fs = require("fs");

fs.writeFile("notes.txt", "Best Node JS Course", (err)=> {
    if(err) throw err; 
    console.log("Data written to file successfully!")
})