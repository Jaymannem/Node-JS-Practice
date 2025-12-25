const EventEmitter = require("events");

class fileUpload extends EventEmitter {
   upload(file) {
    console.log(`Starting upload ${file}....`);

    let progress = 0; 

    const interval = setInterval(()=> {
        progress = progress + 20;
        this.emit("progress", progress)
        if(progress === 100) {
            clearInterval(interval);
            this.emit("done", `${file} uploaded successfully!`)
        }
    }, 1000)
   }
}

const uploadFile = new fileUpload();

uploadFile.on("progress", (percentage) => {
    console.log(`Upload Progress: ${percentage}%`)
})

uploadFile.on("done", (message) => {
    console.log(message)
});

uploadFile.upload("messages.txt")