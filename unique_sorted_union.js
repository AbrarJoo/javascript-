function uniteUnique(...arrs) {
  const result = [];
  for (const arr of arrs) {
    for (const item of arr) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }
  }
  return result;
}
const test1 = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(test1);
