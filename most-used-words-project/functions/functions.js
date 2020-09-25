const fs = require("fs");
const path = require("path");

const composition = (...fns) => {
  return (value) => {
    return fns.reduce(async (acc, fn) => {
      return Promise.resolve(acc) === acc ? fn(await acc) : fn(acc);
    }, value);
  };
};

const readDirectory = (filePath) => {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(filePath);
      const completeFilePath = files.map((file) => path.join(filePath, file));
      resolve(completeFilePath);
    } catch (exception) {
      reject(exception);
    }
  });
};

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(path, { encoding: "utf-8" });
      resolve(content.toString());
    } catch (exception) {
      reject(exception);
    }
  });
};

const removeWhenHasNumber = (array) => {
  return array.filter((element) => {
    const number = parseInt(element.trim());

    //!(number !== 0 && !!number)
    return number !== number; // when number get a value NaN we receive false in this comparation
  });
};

const removeSymbols = (symbols) => {
  return (array) => {
    return array.map((element) => {
      return symbols.reduce((acc, symbol) => {
        return acc.split(symbol).join("");
      }, element);
    });
  };
};

const removeEmptyElements = (array) =>
  array.filter((element) => element.trim());

const readFiles = (paths) => Promise.all(paths.map((path) => readFile(path)));

const removeWhenHasPattern = (pattern) => {
  return (array) => {
    return array.filter((element) => !element.includes(pattern));
  };
};

const filterFileByExtension = (pattern) => {
  return (array) => array.filter((element) => element.endsWith(pattern));
};

const mergeElements = (contents) => contents.join(" ");

const splitText = (symbol) => {
  return (text) => text.split(symbol);
};

const groupElements = (words) => {
  return Object.values(
    words.reduce((grouped, word) => {
      const wordLowerCase = word.toLowerCase();
      const quantity = grouped[wordLowerCase]
        ? grouped[wordLowerCase].quantity + 1
        : 1;

      grouped[wordLowerCase] = { element: wordLowerCase, quantity };

      return grouped;
    }, {})
  );
};

/**
  Ordenation example:
  [3, 1, 1, 5]
  3 - 1 = 2
  [1, 3, 1, 5]
  3 - 1 = 2
  [1, 1, 3, 5]
 */
const orderByNumbericAttribute = (attribute, orderBy = "asc") => {
  return (array) => {
    const desc = (obj1, obj2) => obj2[attribute] - obj1[attribute];
    const asc = (obj1, obj2) => obj1[attribute] - obj2[attribute];

    return [...array].sort(orderBy === "asc" ? asc : desc);
  };
};

const save = (mostUsedWord) => {
  fs.writeFileSync("most-used-words.txt", mostUsedWord, {
    encoding: "utf-8",
  });
};

module.exports = {
  composition,
  readDirectory,
  filterFileByExtension,
  readFile,
  readFiles,
  removeEmptyElements,
  removeWhenHasPattern,
  removeWhenHasNumber,
  removeSymbols,
  mergeElements,
  splitText,
  groupElements,
  orderByNumbericAttribute,
  save,
};
