const fs = require("fs").promises;

async function processFile() {
    try {
        const inputFileData = await fs.readFile("input.txt", "utf-8");
        const modifiedData = inputFileData.toUpperCase();

        await fs.writeFile("output.txt", modifiedData);
        console.log("data written successfully!");

        const finalResult = await fs.readFile("output.txt", "utf-8");
        console.log("finalResult", finalResult)
    } catch(error) {
        console.error("Error in process file", error.message)
    }
}

processFile()