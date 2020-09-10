/**
 * @Challenge
 *
 * 1 - fragile === true;
 * 2 - total price;
 * 3 - total average;
 * Use: filter, map, reduce
 */

const cart = [
  { name: "Caneta", quantity: 0, price: 7.99, fragile: false },
  { name: "Impressora", quantity: 10, price: 649.99, fragile: true },
  { name: "Caderno", quantity: 4, price: 12.5, fragile: false },
  { name: "Lápis", quantity: 3, price: 5.82, fragile: true },
  { name: "Tesoura", quantity: 1, price: 8, fragile: true },
];

const isFragile = (item) => item.fragile;
const totals = (item) => item.quantity * item.price;
const average = (acc, el) => {
  const quantity = acc.quantity + 1;
  const total = acc.total + el;

  return {
    quantity,
    total,
    media: total / quantity,
  };
};

const initialValue = { quantity: 0, total: 0, media: 0 };

const cartOperation = cart
  .filter(isFragile)
  .map(totals)
  .reduce(average, initialValue);

console.log(cartOperation);
