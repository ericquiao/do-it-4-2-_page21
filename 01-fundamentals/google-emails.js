const fs = require("fs/promises");

async function getGoogleEmails() {
  const fileContent = await fs.readFile("data.csv", "utf-8");

  const rows = fileContent.split("\r\n");

  const gmails = [];

  rows.forEach((row, index) => {
    if (index === 0) {
      return;
    }

    const email = row.split(",").pop();

   

    // console.log({
    //   email,
    //   condition: email.endsWith("@gmail.com"),
    // });
    if (email.endsWith("@gmail.com")) {
      gmails.push(email);
    }
  });

  await fs.writeFile('gmail.txt', gmails.join('\n'), 'utf-8');
  
}

getGoogleEmails();
