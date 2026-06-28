function smallestCommons(arr) {
  arr.sort((a, b) => a - b);

  const min = arr[0];
  const max = arr[1];

  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  let multiple = max;

  while (true) {
    if (range.every((num) => multiple % num === 0)) {
      return multiple;
    }
    multiple += max;
  }
}
