function generateNumbersBetween(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor) + min;
    resolve(random);
  });
}

generateNumbersBetween(10, 100)
  .then((num) => num * 10)
  .then((numX10) => `Generated number is ${numX10}`)
  .then(console.log);
