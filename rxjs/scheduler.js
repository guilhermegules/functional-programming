const { from, asyncScheduler } = require("rxjs");
const { observeOn } = require("rxjs/operators");

console.log("init");

// Transforming sync operations in async operations
from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .pipe(observeOn(asyncScheduler))
  .subscribe(console.log);

console.log("end");
