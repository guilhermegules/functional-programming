// sum(1)(2)(3)
function sum(number1) {
  return (number2) => {
    return (number3) => {
      return number1 + number2 + number3;
    };
  };
}

console.log(sum(1)(2)(3));

// calculate(3)(7)(fn)
function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function multiplication(a, b) {
  return a * b;
}

function calculate(number) {
  return function (number2) {
    return function (fn) {
      return fn(number, number2);
    };
  };
}

console.log(calculate(10)(10)(sub));
console.log(calculate(10)(10)(div));
console.log(calculate(10)(10)(multiplication));
