function order(array) {
  return [...array].sort();
}

const numbers = [10, 5, 4, 8, 100];
const orderedNumbers = order(numbers);

console.log(numbers, orderedNumbers);
