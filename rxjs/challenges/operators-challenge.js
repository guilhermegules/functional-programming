const { of, Observable } = require("rxjs");

function endedWith(pattern) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          if (Array.isArray(value)) {
            subscriber.next(
              value.filter((element) => element.endsWith(pattern))
            );
          } else if (value.endsWith(pattern)) {
            subscriber.next(value);
          }
        },
        complete() {
          subscriber.complete();
        },
        error(exception) {
          subscriber.error(exception);
        },
      });
    });
  };
}

of(["Ana Silva", "Maria Silva", "Pedro Rocha"])
  .pipe(endedWith("Silva"))
  .subscribe(console.log);

of("Ana Silva", "Maria Silva", "Pedro Rocha")
  .pipe(endedWith("Silva"))
  .subscribe(console.log);
