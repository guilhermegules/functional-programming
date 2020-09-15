const { rejects } = require("assert");

function generateNumbersBetween(min, max, bannedNumbers) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const factor = max - min + 1;
    const random = parseInt(Math.random() * factor) + min;
    if (bannedNumbers.includes(random)) {
      reject("Repeated number");
    } else {
      resolve(random);
    }
  });
}

async function generateMegaSena(numbersQuantity) {
  try {
    const numbers = [];
    for (let _ of Array(numbersQuantity).keys()) {
      numbers.push(await generateNumbersBetween(1, 60, numbers));
    }

    return numbers;
  } catch (exception) {
    throw "Oops!";
  }
}

generateMegaSena(8).then(console.log).catch(console.log);
