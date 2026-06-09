const randomNum = Math.random();
console.log(`random float = ${randomNum.toFixed(3)}`);

const smallest = Math.min(1, 3, 5, 77);
console.log(smallest);

const largest = Math.max(1, 3, 5, 77);
console.log(largest);

//rounding off
const roundUp = Math.ceil(4.6);
console.log(`rounding up 4.6 to ${roundUp}`);

const roundDown = Math.floor(4.6);
console.log(`rounding down 4.6 to ${roundDown}`);

const roundOff = Math.round(5.5);
console.log(`rounding off to nearest integer ${roundOff}`);
