const path = require("path");
const { stringify } = require("querystring");
const {
  readDirectory,
  filterFileByExtension,
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
];

const mostUsedWords = readDirectory(subtitlesPath)
  .then((path) => filterFileByExtension(path, ".srt"))
  .then(readFiles)
  .then(mergeElements)
  .then(splitText("\n"))
  .then(removeEmptyElements)
  .then(removeWhenHasPattern("-->"))
  .then(removeWhenHasNumber)
  .then((lines) => removeSymbols(symbols, lines))
  .then(mergeElements)
  .then(splitText(" "))
  .then(removeEmptyElements)
  .then(removeWhenHasNumber)
  .then(groupElements)
  .then(orderByNumbericAttribute("quantity", "desc"))
  .then(console.log)
  .then((mostUsedWords) => save(JSON.stringify(mostUsedWords)));
