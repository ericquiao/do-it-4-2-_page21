const fs = require("fs/promises");

module.exports = function readFileContent(fileName){
  return fs.readFile(fileName,'utf-8')
}