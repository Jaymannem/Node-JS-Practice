const fs = require("fs");

fs.readdir('data', (err, files)=> {
    if(err) throw err; 
    console.log(files)
})