function execute(fn, ...params) {
  return function (text) {
    return `${text} ${fn(...params)}!`;
  };
}

function sum(a, b, c) {
  return a + b + c;
}

function multiply(a, b) {
  return a * b;
}

console.log(execute(sum, 10, 15, 20)("Sum result is: "));
console.log(execute(multiply, 5, 10)("Multiply result is: "));
