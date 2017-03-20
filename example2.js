// Passing value from generator to generator instance.
function* createHello() {
  yield 'first';
}

const hello = createHello();
console.log(hello.next()); // returns { value: 'first', done: false }
console.log(hello.next()); // returns { value: undefined, done: true }
