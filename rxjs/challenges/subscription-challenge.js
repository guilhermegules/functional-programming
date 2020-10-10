// operator can wait 3000ms
// generate numbers with 500ms
// After 10000 call unsubscribe()

const { timer, Subscription } = require("rxjs");

const numbers = timer(3000, 500);

const obs1 = numbers.subscribe((num) => {
  console.log(num);
});

const obs2 = numbers.subscribe((num) => {
  console.log(num);
});

const obs3 = numbers.subscribe((num) => {
  console.log(num);
});

const subscription = new Subscription();

subscription.add(obs1);
subscription.add(obs2);
subscription.add(obs3);

setTimeout(() => {
  subscription.unsubscribe();
}, 10000);
