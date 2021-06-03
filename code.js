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

function isFive(num) {
    return num === 5;
}

function isEven(num) {
    return num % 2 === 0;
}

function isVowel(str) {
    return str === 'a' || str === 'A';
}