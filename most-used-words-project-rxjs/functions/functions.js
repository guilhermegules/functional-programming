const fs = require("fs");
const path = require("path");
const { Observable } = require("rxjs");

const readDirectory = (filePath) => {
  return new Observable((subscriber) => {
    try {
      fs.readdirSync(filePath).forEach((file) => {
        subscriber.next(path.join(filePath, file));
      });
      subscriber.complete();
    } catch (exception) {
      subscriber.error(exception);
    }
  });
};

const readFile = () => {
  return createPipeableOperator((subscriber) => ({
    next(path) {
      try {
        const content = fs.readFileSync(path, { encoding: "utf-8" });
        subscriber.next(content.toString());
      } catch (exception) {
        subscriber.error(exception);
      }
    },
  }));
};

const removeWhenInitWithNumber = () => {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      const num = parseInt(text.trim());
      if (num !== num) {
        subscriber.next(text);
      }
    },
  }));
};

const removeSymbols = (symbols) => {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      const textWithoutSymbols = symbols.reduce(
        (accumulator, symbol) => accumulator.split(symbol).join(""),
        text
      );

      subscriber.next(textWithoutSymbols);
    },
  }));
};

const removeEmptyElements = () => {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      if (text.trim()) {
        subscriber.next(text);
      }
    },
  }));
};

const filterFileByExtension = (pattern) => {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      if (text.endsWith(pattern)) {
        subscriber.next(text);
      }
    },
  }));
};

const mergeElements = (contents) => contents.join(" ");

const splitText = (symbol) => {
  return createPipeableOperator((subscriber) => ({
    next(text) {
      text.split(symbol).forEach((part) => {
        subscriber.next(part);
      });
    },
  }));
};

const groupElements = () => {
  return createPipeableOperator((subscriber) => ({
    next(words) {
      const grouped = Object.values(
        words.reduce((grouped, word) => {
          const wordLowerCase = word.toLowerCase();
          const quantity = grouped[wordLowerCase]
            ? grouped[wordLowerCase].quantity + 1
            : 1;

          grouped[wordLowerCase] = { element: wordLowerCase, quantity };

          return grouped;
        }, {})
      );

      subscriber.next(grouped);
    },
  }));
};

const save = (mostUsedWord) => {
  fs.writeFileSync("most-used-words.txt", mostUsedWord, {
    encoding: "utf-8",
  });
};

const createPipeableOperator = (operator) => {
  return function (source) {
    return new Observable((subscriber) => {
      const sub = operator(subscriber);
      source.subscribe({
        next: sub.next,
        error: sub.error || ((err) => subscriber.error(err)),
        complete: sub.complete || ((value) => subscriber.complete(value)),
      });
    });
  };
};

module.exports = {
  readDirectory,
  filterFileByExtension,
  readFile,
  removeEmptyElements,
  removeWhenInitWithNumber,
  removeSymbols,
  mergeElements,
  splitText,
  groupElements,
  save,
};
