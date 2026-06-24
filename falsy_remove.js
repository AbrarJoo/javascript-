function bouncer(arr) {
  let result = [];
  for (let item of arr) {
    if (item) {
      result.push(item);
    }
  }
  return result;
}
