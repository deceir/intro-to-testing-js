// helloWorld function 
const helloWorld = function helloWorld() {
    return "Hello, World!";
}

function sayHello(str) {
    if (typeof str === "string" ) {
        return "Hello, " + str + "!";
    } else {
        return "Hello, World!";
    }
}