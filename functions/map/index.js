/**
 * @Map
 *
 * Syntax: [1, 2, 3].map(fn) => transform the array without change original array
 */

const numbers = [1, 2, 3, 4, 5];

const double = (num) => num * 2;

console.log(numbers.map(double));

const names = ["Guilherme", "Ana", "Caroline", "Leonardo"];

const firstLetter = (text) => text[0];

console.log(names.map(firstLetter));

const cart = [
  { name: "Caneta", quantity: 0, price: 7.99 },
  { name: "Impressora", quantity: 10, price: 649.99 },
  { name: "Caderno", quantity: 4, price: 12.5 },
  { name: "Lápis", quantity: 3, price: 5.82 },
  { name: "Tesoura", quantity: 1, price: 8 },
];

// const getName = (item) => item.name;

// console.log(cart.map(getName));

// const getTotal = (item) => item.quantity * item.price;
// const totals = cart.map(getTotal);

// console.log(totals);

// Creating our map
Array.prototype.mapping = function (fn) {
  const mapped = [];

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this);
    mapped.push(`--> ${result}`);
  }

  return mapped;
};

const getName = (item) => item.name;

console.log(cart.mapping(getName));

const getTotal = (item) => item.quantity * item.price;
const totals = cart.mapping(getTotal);

console.log(totals);
