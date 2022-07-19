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


//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function captitalizeArray(ArrayName) {
    const capitalizedArray = [];
    for (let i = 0; i < ArrayName.length; i++) {
        let capitalizedLetter = ArrayName[i].toUpperCase();
        capitalizedArray.push(capitalizedLetter);
    }
    return capitalizedArray;
}

console.log(captitalizeArray(["a", "b"]));


//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
    const oldArray = [];
    oldArray.push(item);
    return oldArray;
};

console.log(addItem(4));
console.log(addItem('s'));


//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
    let sum = [number * (number + 1)] / 2;
    return sum;
}

console.log(sumOfNumbers(10));


//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number) {
    let sum = 0;
    for(let j = 0; j < number; j++) {
        if(j % 2 !== 0) {
            sum += j;
        }
    }
    return sum;
}

console.log(sumOfOdds(5));


//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(positiveInteger) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i <= positiveInteger; i++) {
        if (i % 2 === 0) {
            evenCount += 1;
        }
        else if (i % 2 !== 0) {
            oddCount += 1;
        }
    }
    console.log("The number of odds are " + oddCount + ".");
    console.log("The number of evens are " + evenCount + ".");
    return [oddCount, evenCount];
    // return "Program is finished";
}

console.log(evensAndOdds(100));


//Unlimited number of parameters to a function!
function newFun() {
    return arguments;
}

console.log(newFun(2, 4, 6));


//Write a function which generates a randomUserIp.
function randomUserIp() {
    const first = Math.floor(Math.random() * 255 + 1);
    const second = Math.floor(Math.random() * 255 + 1);
    const third = Math.floor(Math.random() * 255 + 1);
    const fourth = Math.floor(Math.random() * 255 + 1);
    return `IP Address is ${first}.${second}.${third}.${fourth}`;
}

console.log(randomUserIp());


//
const radius = [3, 4, 1, 2];

function prerequisite(radius, logic) {
    let newCircleArray = [];
    for (let i = 0; i < radius.length; i++) {
        newCircleArray.push(logic(radius[i]));
    }
    return newCircleArray;
}

function areaOfCircle(radius) {
    return Math.floor(Math.PI * radius * radius);
}

function circumOfCircle(radius) {
    return Math.floor(2 * Math.PI * radius);
}

console.log(prerequisite(radius, areaOfCircle));
console.log(prerequisite(radius, circumOfCircle));
