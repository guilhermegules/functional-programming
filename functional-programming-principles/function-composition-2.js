function composition(...fns) {
  return (value) => {
    return fns.reduce(async (acc, fn) => {
      return Promise.resolve(acc) === acc ? fn(await acc) : fn(acc);
    }, value);
  };
}

function scream(text) {
  return text.toUpperCase();
}

function emphasize(text) {
  return `${text}!!!!`;
}

function makeSlow(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text.split("").join(" "));
    }, 2000);
  });
}

const exaggerate = composition(scream, emphasize, makeSlow);
const lessExaggerate = composition(scream, emphasize);

exaggerate("javascript is awesome").then(console.log);
lessExaggerate("functional programming is awesome").then(console.log);
