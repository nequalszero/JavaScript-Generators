function* create3To4Counter() {
  yield 3;
  yield 4;
}

// createCounter will delegate its control to the create3To4Counter
function* createCounter() {
  yield 1;
  yield 2;
  yield* create3To4Counter();
  yield 5;
}

for (let i of createCounter()) {
  console.log(i);
}

console.log("\n");


// returns a value to the createCounter generator
function* create3To4Counter() {
  yield 3;
  return 4;
}

function* createCounter() {
  yield 1;
  yield 2;
  const four = yield* create3To4Counter();
  console.log(four);
  yield 5;
}

for (let i of createCounter()) {
  console.log(i);
}
