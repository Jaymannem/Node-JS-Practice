const EventEmitter = require("events");

const myEventEmitter = new EventEmitter();

myEventEmitter.on("greet", (name)=> {
    console.log(`Hello ${name}`)
});

myEventEmitter.emit("greet", "Jay Mannem")