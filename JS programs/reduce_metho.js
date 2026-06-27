const numbers = [1, 2, 3, 4, 5, 6, 66];
const sum = numbers.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  0,
);
console.log(sum);

// where 0 is the initial value of the accumulator
