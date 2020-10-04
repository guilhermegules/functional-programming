const { Observable } = require("rxjs");

const obs$ = Observable.create((subscriber) => {
  subscriber.next("RxJS");
  subscriber.next("its");
  subscriber.next("Powerfull");

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error("Error on subscription");
  }
});

// obs$.subscribe(
//   (value) => console.log(`Value: ${value}`),
//   (err) => console.log(`Error: ${err}`),
//   () => console.log("end")
// );

obs$.subscribe({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.error(err);
  },
  complete() {
    console.log("End");
  },
});
