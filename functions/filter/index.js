/**
 * @Filter
 *
 * [1, 2, 3].filter(item => return the array matching a pattern)
 */

const cart = [
  { name: "Caneta", quantity: 0, price: 7.99 },
  { name: "Impressora", quantity: 10, price: 649.99 },
  { name: "Caderno", quantity: 4, price: 12.5 },
  { name: "Lápis", quantity: 3, price: 5.82 },
  { name: "Tesoura", quantity: 1, price: 8 },
];

const greaterThanZero = (item) => item.quantity > 0;
const getName = (item) => item.name;

const cartItemValidName = cart.filter(greaterThanZero).map(getName);

console.log(cart.filter(greaterThanZero));

console.log(cartItemValidName);

// Create our filter
Array.prototype.filtering = function (fn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const cartItemValidNameFiltering = cart.filtering(greaterThanZero).map(getName);

console.log(cartItemValidNameFiltering);
