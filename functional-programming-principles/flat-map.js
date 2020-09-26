const nestedLetters = [
  ["H", "e", ["l", "l"], "o"],
  [" "],
  ["w", ["o"], "r", "l", "d"],
];

const letters = nestedLetters.flat(Infinity);

const result = letters
  .map((letter) => letter.toUpperCase())
  .reduce((acc, value) => acc + value);

const resultWithFlatMap = nestedLetters
  .flatMap((l) => [l, ","])
  .reduce((acc, cur) => acc + cur);

console.log(result);
console.log(resultWithFlatMap);
