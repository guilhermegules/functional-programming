const path = require("path");
const { toArray, map, groupBy, mergeMap, reduce } = require("rxjs/operators");
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
    groupBy((element) => element.toLowerCase()),
    mergeMap((group) =>
      // group.pipe(reduce((accumulator, actual) => [...accumulator, actual], []))
      group.pipe(toArray())
    ),
    map((words) => ({ element: words[0], quantity: words.length })),
    toArray(),
    map((array) => _.sortBy(array, (element) => -element.quantity))
  )
  .subscribe(console.log);
