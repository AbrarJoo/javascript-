const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = arrayNum.filter((num) => num % 2 === 0);
console.log(evenNum);

const oddNum = arrayNum.filter((num) => num % 2 !== 0);
console.log(oddNum);

const largeNum = arrayNum.filter((num) => num > 5);
console.log(largeNum);

const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 },
];

const youngPeople = developers.filter((people) => people.age <= 26);
console.log(youngPeople);
