const fs = require("fs");
const path = require("path");

// creating a folder
const asyncDataFolder = path.join(__dirname, "async-data");

if (!fs.existsSync(asyncDataFolder)) {
  fs.mkdirSync(asyncDataFolder);
  console.log("folder is created");
}

// creating a file inside async-data folder
const filePath = path.join(asyncDataFolder, "async.txt");
fs.writeFile(filePath, "Welcome to Node JS Course", (err) => {
  if (err) throw err;
  console.log("Data written successfully!");

  // read content
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("content: ", data);

    fs.appendFile(filePath, "\nThank you for your support", (err) => {
      if (err) throw err;
      console.log("data appended successfully!");

      fs.readFile(filePath, "utf-8", (err, updatedContent)=> {
        if(err) throw err; 
        console.log("updated content: ", updatedContent)
      })
    });
  });
});
