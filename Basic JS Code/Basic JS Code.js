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
