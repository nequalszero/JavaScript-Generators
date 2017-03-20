// Passing value from generator instance to generator.
function* createHello() {
  const word = yield;
  console.log(word);
}

const hello = createHello();
console.log(hello.next()); // returns { value: undefined, done: false }
console.log(hello.next('Max')); // returns { value: undefined, done: true }
