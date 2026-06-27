const num = [1, 2, 3, 4];
num.forEach(function (num) {
  console.log(num * 2);
});

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number * 2));

let lengths = [2, 4, 6, 8, 10];
lengths.forEach((lengths, index, array) => {
  console.log(`length ${lengths} is at the "${index}th" in array:${array}"`);
});
