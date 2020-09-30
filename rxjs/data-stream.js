// Stream with js example

function generateNumbers(fn) {
  return {
    init(fn, interval = 1000) {
      let num = 0;
      const intervalFunction = setInterval(() => {
        fn(num++);
      }, interval);

      return {
        stop() {
          clearInterval(intervalFunction);
        },
      };
    },
  };
}

const temp1 = generateNumbers();
const exec1 = temp1.init((num) => {
  console.log(`#1 - ${num * 2}`);
});

const temp2 = generateNumbers();
const exec2 = temp2.init((num) => {
  console.log(`#2 - ${num + 100}`);
});

setTimeout(() => {
  exec1.stop();
  exec2.stop();
}, 5000);
