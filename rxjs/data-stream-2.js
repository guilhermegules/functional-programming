const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

function generateElements(array) {
  return {
    init(fn) {
      let index = 0;
      const i = setInterval(() => {
        if (index >= array.length) {
          clearInterval(i);
        } else {
          fn(array[index]);
          index++;
        }
      }, 1000);

      return {
        stop() {
          clearInterval(i);
        },
      };
    },
  };
}

const temp = generateElements(numbers);

const subscription = temp.init((num) => {
  console.log(Math.pow(2, num));
});

setTimeout(() => {
  subscription.stop();
}, 4000);

generateElements(["Guilherme", "Gules", "Moreira"]).init((name) => {
  console.log(name);
});
