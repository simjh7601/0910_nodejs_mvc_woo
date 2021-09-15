const mysql = require("mysql");

var db = mysql.createConnection({
    host     : process.env.DB_HOST, // (localhost)
    user     : process.env.DB_USER, 
    password : process.env.DB_PSWORD,
    database : process.env.DB_DATABASE
  });

  db.connect();

  module.exports = db;