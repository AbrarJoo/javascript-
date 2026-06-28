function destroyer(arr, ...vals) {
  return arr.filter((item) => !vals.includes(item));
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
