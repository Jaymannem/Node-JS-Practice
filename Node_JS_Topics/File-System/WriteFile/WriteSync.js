const fs = require("fs");

try {
  fs.writeFileSync("notes1.txt", "This is the best node js course");
  console.log("Data written successfully!");
} catch (error) {
  console.log("Error in writting data to file", error);
}
