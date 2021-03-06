const path = require("path");
const { toArray, map } = require("rxjs/operators");
const _ = require("lodash");

const {
  readDirectory,
  filterFileByExtension,
  readFile,
  removeEmptyElements,
  removeSymbols,
  splitText,
  groupElements,
  save,
  removeWhenInitWithNumber,
} = require("./functions/functions");

const subtitlesPath = path.join(__dirname, "subtitles");

const symbols = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
  "!",
];

readDirectory(subtitlesPath)
  .pipe(
    filterFileByExtension(".srt"),
    readFile(),
    splitText("\n"),
    removeEmptyElements(),
    removeWhenInitWithNumber(),
    removeSymbols(symbols),
    splitText(" "),
    removeEmptyElements(),
    removeWhenInitWithNumber(),
    toArray(),
    groupElements(),
    map((array) => _.sortBy(array, (element) => -element.quantity))
  )
  .subscribe(console.log);
