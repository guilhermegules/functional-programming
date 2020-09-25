function composition(...fns) {
  return function (value) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, value);
  };
}

function scream(text) {
  return text.toUpperCase();
}

function emphasize(text) {
  return `${text}!!!!`;
}

function makeSlow(text) {
  return text.split("").join(" ");
}

const exaggerate = composition(scream, emphasize, makeSlow);
const lessExaggerate = composition(scream, emphasize);

const result1 = exaggerate("javascript is awesome");
const result2 = lessExaggerate("functional programming is awesome");

console.log(result1);
console.log(result2);
