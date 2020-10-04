const { Observable } = require("rxjs");

const promise = new Promise((resolve) => {
  resolve("Promise is nice :D");
});

promise.then(console.log);

const obs = new Observable((subscriber) => {
  subscriber.next("Observer");
  subscriber.next("is");
  subscriber.next("very");
  subscriber.next("nice");
  subscriber.complete();
});

obs.subscribe(console.log);
obs.subscribe((text) => console.log(text.toUpperCase()));
