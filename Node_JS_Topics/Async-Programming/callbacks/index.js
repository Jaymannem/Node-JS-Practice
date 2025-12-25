function person(name, callbackFn) {
    console.log(`Hello ${name}`);
    callbackFn()
}

function address() {
    console.log("India")
}

person("jay", address)