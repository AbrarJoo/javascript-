let fruits = ["banana", "apple", "mango"];
console.log(typeof fruits);
console.log(fruits);
console.log(fruits[1]);
console.log(fruits.length);

//replacing elements
fruits[1] = "papaya";
console.log(fruits);

//adding elements
fruits[3] = "new_friut";
console.log(fruits);

//add, remove from beginning and end of array
let veggies = ["v1", "v2", "v3"];
veggies.push("v4");
console.log(veggies);

//pushing into a constant array
const veg = ["v1", "v2", "v3"];
veg.push = "constant push";
console.log(veg);

//popping the last element

let lastveg = veggies.pop();
console.log(lastveg);

//unshift method adds one or more elemts to the start of array
let numbers = [1, 2, 3, 4];
numbers.unshift(5, 6);
console.log(numbers);

//and the shift method removes the first element of array similar like pop()
let alphabets = ["A", "B", "C", "D"];
let firstAplha = alphabets.shift();
console.log(firstAplha);
