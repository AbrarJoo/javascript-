function logargs(...args) {
  for (const arg of args) {
    console.log(args);
  }
}

test1 = logargs(1, 2, 3);
