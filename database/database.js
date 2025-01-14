const mysql = require("mysql");
require("dotenv").config();

const Pool = mysql.createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "user",
  connectionLimit: 10,
});

module.exports = Pool;
