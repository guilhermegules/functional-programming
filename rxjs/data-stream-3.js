const { interval } = require("rxjs");

const generateNumbers = interval(500);

const subscription = generateNumbers.subscribe((num) => {
  console.log(Math.pow(2, num));
});

setTimeout(() => subscription.unsubscribe(), 5000);
