/**
 * @Reduce
 *
 * Syntax: [1, 2, 3].reduce((accumulator, actual), initialValue)
 */

const reduceSum = (acc, act) => acc + act;

const numbers = [1, 2, 3, 4, 5];

const sumAll = numbers.reduce(reduceSum, 0);

console.log(sumAll);

const cart = [
  { name: "Caneta", quantity: 0, price: 7.99 },
  { name: "Impressora", quantity: 10, price: 649.99 },
  { name: "Caderno", quantity: 4, price: 12.5 },
  { name: "Lápis", quantity: 3, price: 5.82 },
  { name: "Tesoura", quantity: 1, price: 8 },
];

const getTotal = (item) => item.quantity * item.price;

const sum = (accumulator, element) => accumulator + element;
const totals = cart.map(getTotal);
const generalValues = totals.reduce(sum, 0);

console.log(generalValues);
