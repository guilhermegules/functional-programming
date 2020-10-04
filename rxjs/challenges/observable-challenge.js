const { range, Observable, noop } = require("rxjs");

// function between(min, max) {
//   range(min, max).subscribe(console.log);
// }

// between(100, 10);

// function between(min, max) {
//   return new Observable((subscriber) => {
//     for (let i = min; i <= max; i++) {
//       subscriber.next(i);
//     }

//     subscriber.complete();
//   });
// }

function between(min, max) {
  return new Observable((subscriber) => {
    Array(max - min)
      .fill()
      .map((_, i) => {
        subscriber.next(min + i);
      });

    subscriber.complete();
  });
}

between(1, 10).subscribe(
  (num) => {
    console.log(num);
  },
  noop,
  () => console.log("end")
);
