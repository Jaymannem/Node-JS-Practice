const fs = require("fs").promises;

async function transformFile() {
    try {
        // 1. read data from input.txt file
        const inputFileData = await fs.readFile("input.txt", "utf-8");

        // 2. transform data
        const modifiedData = inputFileData.toUpperCase();

        // 3. write data to output.txt file
        await fs.writeFile("output.txt", modifiedData);
        console.log("Data written successfully!");

        // 4. read data from output.txt file
        const result = await fs.readFile("output.txt", "utf-8");
        console.log("result: ", result)
    } catch(error) {
        console.error("File operation failed: ", error.message)
    }
}

transformFile()