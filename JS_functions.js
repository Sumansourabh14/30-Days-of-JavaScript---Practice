// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(num1, num2, num3) {
    let max = 0;
    if (num1 > num2 && num1 > num3) {
        max = num1;
    }
    else if (num2 > num3) {
        max = num2;
    }
    else {
        max = num3;
    } 
    return max;
}

console.log(findMax(0, 10, 5));

console.log(findMax(0, -10, -2));

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(nameOfArray) {
    for (let i = 0; i < nameOfArray.length; i++) {
        console.log(nameOfArray[i]);
    }
    return "Values were returned";
}

console.log(printArray([3, 5, 6]));

//
console.log("One");

setTimeout(() => {
    console.log("Timer Function!");
}, 200);

console.log("Two");
