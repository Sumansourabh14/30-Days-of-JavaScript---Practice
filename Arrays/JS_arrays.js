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

arr[2](); 
