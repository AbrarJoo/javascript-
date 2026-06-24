function titleCase(str) {
  let result = [];
  for (const word of str.split(" ")) {
    result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return result.join(" ");
}

const test = titleCase("I like to code");
console.log(test);
