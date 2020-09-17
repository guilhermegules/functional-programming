const fs = require("fs");
const path = require("path");

function readDirectory(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(filePath);
      const completeFilePath = files.map((file) => path.join(filePath, file));
      resolve(completeFilePath);
    } catch (exception) {
      reject(exception);
    }
  });
}

function readFile(path) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(path, { encoding: "utf-8" });
      resolve(content.toString());
    } catch (exception) {
      reject(exception);
    }
  });
}

const removeEmpty = (array) => array.filter((element) => element.trim());

const readFiles = (paths) => Promise.all(paths.map((path) => readFile(path)));

const filterFileByExtension = (array, pattern) =>
  array.filter((element) => element.endsWith(pattern));

module.exports = {
  readDirectory,
  filterFileByExtension,
  readFile,
  readFiles,
  removeEmpty,
};
