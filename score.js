const score = prompt("enter your score", XX);

if (score === 100) {
  console.log("Full marks");
} else if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else {
  console.log("FAIL");
}

//ternary

const temp = 34;

const wheather = temp > 25 ? "sunny" : "cool";
console.log(`it is a ${wheather} day`);
