// Two Types...
// 1. Creational operators
// 2. Pipeable operators

const { of, from } = require("rxjs");
const { last, first, map } = require("rxjs/operators");

from([1, 2, 3, 4])
  .pipe(
    first(),
    map((item) => `Using from operator ${item}`)
  )
  .subscribe(console.log);

of(1, 2, 3, 4, 100)
  .pipe(
    last(),
    map((item) => `${item}!!!`)
  )
  .subscribe(function (value) {
    console.log(`Generated value: ${value}`);
  });
