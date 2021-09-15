

const fs = require("fs");
const appRoot = require("app-root-path");

var accessLogStream = fs.createWriteStream(
    `${appRoot}/logs/access.log`, 
    { flags: 'a' })

module.exports = accessLogStream;

