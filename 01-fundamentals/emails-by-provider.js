const fs = require("fs/promises");
const path = require("path");

//const provider = process.argv.slice(2)[0];

async function getEmails(emailProvider) {

  const input = path.resolve(__dirname, 'data.csv')

  const fileContent = await fs.readFile(input, "utf-8");

  const rows = fileContent.split("\r\n");

  const mails = [];

  rows.forEach((row, index) => { 
    if (index === 0) {
      return;
    }

    const email = row.split(",").pop();

    if (email.endsWith(`@${emailProvider}.com`)) {
      mails.push(email); 
    }
  });

  const outputFilePath = path.resolve(__dirname, `${emailProvider}.txt`);

  await fs.writeFile(outputFilePath, mails.join('\n'), 'utf-8');
  
}

//getEmails(provider);

module.exports = getEmails;
