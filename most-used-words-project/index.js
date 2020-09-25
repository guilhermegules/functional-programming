const path = require("path");
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
  composition,
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

/**
 * @Promise way
 */
// const mostUsedWords = readDirectory(subtitlesPath)
//   .then(filterFileByExtension(".srt"))
//   .then(readFiles)
//   .then(mergeElements)
//   .then(splitText("\n"))
//   .then(removeEmptyElements)
//   .then(removeWhenHasPattern("-->"))
//   .then(removeWhenHasNumber)
//   .then(removeSymbols(symbols))
//   .then(mergeElements)
//   .then(splitText(" "))
//   .then(removeEmptyElements)
//   .then(removeWhenHasNumber)
//   .then(groupElements)
//   .then(orderByNumbericAttribute("quantity", "desc"))
//   .then((mostUsedWords) => save(JSON.stringify(mostUsedWords)));

const mostUsedWords = composition(
  readDirectory,
  filterFileByExtension(".srt"),
  readFiles,
  mergeElements,
  splitText("\n"),
  removeEmptyElements,
  removeWhenHasPattern("-->"),
  removeWhenHasNumber,
  removeWhenHasPattern(symbols),
  mergeElements,
  splitText(" "),
  removeEmptyElements,
  removeWhenHasNumber,
  groupElements,
  orderByNumbericAttribute("quantity", "desc")
);

mostUsedWords(subtitlesPath).then((mostUsedWords) =>
  save(JSON.stringify(mostUsedWords))
);
