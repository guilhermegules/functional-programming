const { Observable, Subject } = require("rxjs");

function getObservable() {
  return new Observable((subscriber) => {
    setTimeout(() => {
      console.log("Observable");
      subscriber.next(Math.random());
      subscriber.complete();
    }, 1000);
  });
}

const obs = getObservable();

obs.subscribe(console.log);
obs.subscribe(console.log);

function getSubject() {
  const sub = new Subject();
  setTimeout(() => {
    console.log("Subject");
    sub.next(Math.random());
    sub.complete();
  }, 1000);

  return sub;
}

const obs2 = getSubject();

obs2.subscribe(console.log);
obs2.subscribe(console.log);
