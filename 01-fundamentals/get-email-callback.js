const fs = require("fs");

fs.readFile("data.csv", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const emails = [];

  const rows = data.split("\r\n");

  rows.forEach((row, index) => {
    if (index === 0) {
      return;
    }

    const values = row.split(",");

    const gender = values[2];

    // console.log({gender})
    // console.log({gender})
    // const email = values.pop()
    // emails.push(email);

    if (gender === "F") {
      const email = values.pop();
      emails.push(email);
    }
  });

  fs.writeFile("female-emails.txt", emails.join("\n"), "utf-8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("female emails collected", emails.length);
  });
});
