const fs = require("fs/promises");
const path = require("path");
//const readCsv = require('./read-csv')
const { readCsvFile } = require("./read-csv");
const { parse } = require("csv-parse");

async function getEmails(requestedGender, filename) {
  try {
    const input = path.resolve(__dirname, "data.csv");

    const fileContent = await fs.readFile(input, "utf-8");
    console.log({ fileContent });

    parse(
      fileContent,
      {
        columns: true,
      },
      async (err, records) => {
        if (err) {
          console.error(err);
          return;
        }

        const emails = [];

        records.forEach((record) => {
          if (record.Gender === requestedGender) {
            emails.push(record.Email);
          }
        });
        console.log(emails);

        const outputFilePath = path.resolve(__dirname, filename);

        await fs.writeFile(outputFilePath, emails.join("\n"), "utf-8");
        console.log("female emails collected", emails.length);
      }
    );
    //const rows = await readCsv(input);
    // const rows = await readCsvFile(input);

    // const emails = [];

    // rows.forEach((row, index) => {
    //   if (index === 0) {
    //     return;
    //   }

    //   const values = row.split(",");

    //   const gender = values[2];

    //   if (gender === requestedGender) {
    //     const email = values.pop();
    //     emails.push(email);
    //   }
    // });
  } catch (err) {
    console.error(err);
  }
}

const args = process.argv.slice(2);

const gender = args[0] || "F";
const outputFile = args[1] || "female-emails.txt";

getEmails(gender, outputFile);
