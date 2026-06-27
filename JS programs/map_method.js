const numbers = [2, 4, 6];
const doubled = numbers.map((num) => num * 2);
const tripled = numbers.map((num) => num * 3);

console.log(doubled);
console.log(tripled);

const number11 = [2, 4, 6].map((element, index, array) => {
  console.log("Element =", element);
  console.log("index=", index);
  console.log("Array=", array);
  return element * 3;
});
