const fs = require("fs");

// read data from input.txt file
fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }

  const modifiedData = data.toUpperCase();

  // write data to output.txt file
  fs.writeFile("output.txt", modifiedData, (err) => {
    if (err) {
      console.error("Error writing file", err);
      return;
    }
    console.log("data written successfully!");

    // read data from output.txt file
    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Error in reading file", err);
        return;
      }
      console.log("content: ", data);
    });
  });
});
