// Passing a function by param to other function
function executeAnything(func) {
  if (typeof func === "function") {
    func();
  }
}

function goodMorning() {
  console.log("Good Morning");
}

executeAnything(goodMorning);

// Returning a function inside other function
function pow(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const powOf2 = pow(2);
console.log(powOf2(8));

console.log(pow(3)(2));
