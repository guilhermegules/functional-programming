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

function workOrNot(value, errorChance) {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorChance) {
      reject("Some error occured!");
    } else {
      resolve(value);
    }
  });
}

workOrNot("Testing...", 0.5)
  .then(console.log)
  .catch((err) => console.log(`Error: ${err}`))
  .then(() => console.log("End"));
