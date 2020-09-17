const path = require("path");
const {
  readDirectory,
  filterFileByExtension,
  readFiles,
  removeEmpty,
} = require("./functions/functions");

const subtitlesPath = path.join(__dirname, "subtitles");

const files = readDirectory(subtitlesPath)
  .then((path) => filterFileByExtension(path, ".srt"))
  .then((pathSrt) => readFiles(pathSrt))
  .then((contents) => contents.join(""))
  .then((allContent) => allContent.split("\n"))
  .then((lines) => removeEmpty(lines))
  .then(console.log);
