const fs = require("fs/promises");
const path = require("path");
const getEmails = require("./emails-by-provider")

const provider = process.argv.slice(2)[0];

getEmails(provider)

