const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/data.txt");

const fileReader = (path) => {
  return new Promise((resolve) => {
    fs.readFile(path, (err, data) => {
      resolve(data.toString());
    });
  });
};

fileReader(filePath)
  .then((content) => content.split(""))
  .then(console.log);
