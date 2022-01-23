const fileName = process.argv.slice(2)[0];
const readFileContent = require('./read-file-content')


readFileContent(fileName)
.then((data)=>console.log(data.length))
.catch(console.error)
