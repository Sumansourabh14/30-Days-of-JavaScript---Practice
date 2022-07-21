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

