const fs = require("fs");

fs.appendFile("notes.txt", "\nWelcome to the node course", (err)=> {
    if(err) throw err; 
    console.log("Data appended successfully!")
})