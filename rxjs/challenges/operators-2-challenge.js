const { from, Observable } = require("rxjs");

// function createPipeableOperator(nextGenerator) {
//   return function (source) {
//     return new Observable((subscriber) => {
//       source.subscribe({
//         next: nextGenerator(subscriber),
//         error(err) {
//           subscriber.error(err);
//         },
//       });
//     });
//   };
// }

// function createPipeableOperator(operator) {
//   return function (source) {
//     return new Observable((subscriber) => {
//       source.subscribe(operator(subscriber));
//     });
//   };
// }

function createPipeableOperator(operator) {
  return function (source) {
    return new Observable((subscriber) => {
      const sub = operator(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || ((err) => subscriber.error(err)),
        complete: sub.complete || ((value) => subscriber.complete(value)),
      });
    });
  };
}

function first() {
  return createPipeableOperator((subscriber) => ({
    next(value) {
      subscriber.next(value);
      subscriber.complete();
    },
  }));
}

function noOne() {
  return createPipeableOperator((subscriber) => ({
    next() {
      subscriber.complete();
    },
  }));
}

function last() {
  let last;
  return createPipeableOperator((subscriber) => ({
    next(value) {
      last = value;
    },
    complete() {
      if (last !== undefined) {
        subscriber.next(last);
      }

      subscriber.complete();
    },
  }));
}

from([1, 2, 3, 4, 5]).pipe(first()).subscribe(console.log);
from([1, 2, 3, 4, 5]).pipe(last()).subscribe(console.log);
from([1, 2, 3, 4, 5]).pipe(noOne()).subscribe(console.log);
