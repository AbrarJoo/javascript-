for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//for...of loop
const nums = ["1g", "2g", "3g", "4g", "5g"];
for (num of nums) {
  console.log(num);
}

//array of objects
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 40 },
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old.`);
}

//for in loop
const fruit = {
  name: "apple",
  color: "red",
  price: 0.99,
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
console.log("---");

//example2
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};
for (prop in person) {
  console.log(person[prop]);
}
