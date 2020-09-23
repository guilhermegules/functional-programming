// Pure or Impure - anwser: Impure, PI is a external value
function circleArea(radius) {
  return radius * radius * Math.PI; // PI is a constant and stable but is a external value
}

// Pure
function circleAreaPure(radius, pi) {
  return radius * radius * pi;
}

console.log(circleArea(10));
console.log(circleArea(10));
console.log(circleAreaPure(10, Math.PI));
console.log(circleAreaPure(10, 3.14));

console.log("\n first example \n");

// Impure - because we depend a random and external value
function randomNumberGenerator(min, max) {
  const factor = max - min + 1;
  return parseInt(Math.random() * factor) + min;
}

console.log(randomNumberGenerator(1, 100));
console.log(randomNumberGenerator(1, 100));
console.log(randomNumberGenerator(1, 100));
console.log(randomNumberGenerator(1, 100));
console.log(randomNumberGenerator(1, 100));

console.log("\n second example \n");
