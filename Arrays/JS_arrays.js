let fruits = ["Apple", "Orange", "Plum",];

//Last element
console.log(fruits.at(-1));  
console.log(fruits[fruits.length - 1]);  
console.log(fruits[-1]);  //undefined

fruits.push("Banana");
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.pop());

fruits.unshift("Element at beginning");  //slow method [need to move the elements (new indexes)]
console.log(fruits);

for(let fruit of fruits) {
    console.log(fruit);
}



//
let array_1 = [1, 2, "VS Code"];
let array_2 = [1, 2, "VS Code"];
let array_3 = array_1;

console.log(array_1 == array_2);        //false (NOT compared by value)
console.log(array_1.toString() == array_2.toString());      //true (inside content is equal)

console.log(array_1.toString());

console.log(null == undefined);     //true
console.log(null === undefined);     //false



//
// Create an array styles with items “Jazz” and “Blues”.
let styles = ["Jazz", "Blues",];

// Append “Rock-n-Roll” to the end.
styles.push("Rock-n-Roll");
console.log(styles);

// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
styles[((styles.length - 1)) / 2] = "Classics";
console.log(styles);

// Strip off the first value of the array and show it.
styles.shift()
console.log(styles);

// Prepend Rap and Reggae to the array.
styles.unshift("Rap", "Reggae");
console.log(styles);


//
let arr = ["a", "b"];

arr.push(function name() {
  console.log(this);
});

arr[2](); // ?


//
// let limit = parseInt(prompt("Enter the no. of values:"));
// let sum = 0;
// let numbersArray = [];
// for(let i = 0; i < limit; i++) {
//     let ask = parseInt(prompt("Enter a number"));
//     if (ask == 0) {
//       continue;
//     }
//     numbersArray.push(ask);
//     sum += ask;
// }
// console.log(sum);


// A maximal subarray
// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.
// let arrOfNumbers = [1, -2, 3, 4, -9, 6];


//Find max number in an array
function getMax(arrayOfNum) {
  let max = arrayOfNum[0];
  for(let k = 0; k<arrayOfNum.length; k++) {
    if (max < arrayOfNum[k]) {
      max = arrayOfNum[k];
    }
  }
  return max;
}

console.log(getMax([1, 4, 2, 4.5]));


//Reverse an array
function reverseArray(array_old) {
  let array_new = [];
  for (let l = array_old.length - 1; l >= 0; l--) {
    array_new.push(array_old[l]);
  }  
  return array_new;
}

console.log(reverseArray([2, 5, 6, 10, 3]));


//
function putLastToFirst(array_input) {
  console.log(array_input);
  for(let m = 0; m < array_input.length; m++) {
    array_input.unshift(array_input[array_input.length - 1]);
  }
  return array_input;
}

// console.log(putLastToFirst([2, 5, 9]));


//Find the number of occurences of a given number
function noOfOccurences(duplicateNumber, array1 = [2, 2, 4, 2, 8, 9, 7, 4, 3]) {
  let count = 0;
  for (let n = 0; n < array1.length; n++) {
    if (duplicateNumber === array1[n]) {
      count++;
    }
  }
  return { count };    //returning an object
};

console.log(noOfOccurences(2));


//
let cleverProgrammer = [1, 2, 3, 4, 5, 6];
let cleverProgrammer_new = [];
for(clever of cleverProgrammer) {
  cleverProgrammer_new.push(Math.pow(clever, 2));
}
console.log(cleverProgrammer_new);

cleverProgrammer.splice(0, 2);  //delete 2 elements from the index 0
console.log(cleverProgrammer);

//add 2 more elements from the last index
cleverProgrammer.splice(cleverProgrammer.length, 0, 8, 9);
console.log(cleverProgrammer);

//copy of array
console.log(cleverProgrammer.slice());

//print subarray
console.log(cleverProgrammer.slice(1, 3));

console.log(cleverProgrammer.concat(fruits, 33, 44, 55));
