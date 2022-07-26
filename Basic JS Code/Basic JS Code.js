"use strict";

console.log("Basic JS Code :)");

//Swap 
// - with 3rd variable
let a = 1;
let b = 2;
console.log(a, b);

let t = a;
a = b;
b = t;

console.log(a, b);

// - without 3rd variable
let c = 3;
let d = 6;
console.log(c, d);

c = c + d;
d = c - d;
c = c - d;
console.log(c, d);

//
console.log(typeof c);

//
console.log(Math.round(Math.pow(1000, 1/3)));


// Fibonacci Series - The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... The next number is found by adding up the two numbers before it
console.log("Fibonacci Sequence Starts:");
let firstNumber = 0;
let secondNumber = 1;
let limit = 1;

console.log(firstNumber);
console.log(secondNumber);

while (limit <= 6) {
    let thirdNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
    console.log(thirdNumber);
    limit++;
}
console.log("Fibonacci Sequence Ends.");
