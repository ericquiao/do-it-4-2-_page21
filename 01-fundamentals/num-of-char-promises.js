const fs = require("fs/promises");

fs.readFile('data.csv','utf-8')
.then((data)=>console.log(data.length))
.catch(console.error)