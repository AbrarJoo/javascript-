const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

const numbers = [414, 200, 5, 10, 3];
console.log(numbers.sort());

// different result due to UTF_8 conversion internally

const numbers11 = [414, 200, 5, 10, 3];
const sorted = numbers11.sort((a, b) => a - b);
console.log(sorted);
