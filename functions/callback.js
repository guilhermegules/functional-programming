const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data/data.txt");

const showContent = (err, data) => {
  console.log(data.toString());
};

console.log("Start");
fs.readFile(filePath, { encoding: "utf-8" }, showContent);
console.log("End");

// async read file
console.log("Start Sync");

const content = fs.readFileSync(filePath, {});
console.log(content.toString());

console.log("End Sync");
