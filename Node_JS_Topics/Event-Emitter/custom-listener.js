const EventEmitter = require('events');

class myCustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = "Hello"
    }

    greet(name) {
        this.emit("greeting", `${this.greeting} ${name}`)
    }
}

const CustomEmitter = new myCustomEmitter();

CustomEmitter.on("greeting", (input)=> {
    console.log("Greeting Event: ", input);
});

CustomEmitter.greet("Jay Mannem")
