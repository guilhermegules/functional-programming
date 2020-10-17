const path = require("path");
const { toArray, map } = require("rxjs/operators");

const {
  readDirectory,
  filterFileByExtension,
  readFile,
  removeEmptyElements,
  removeSymbols,
  mergeElements,
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
    groupElements()
  )
  .subscribe(console.log);
