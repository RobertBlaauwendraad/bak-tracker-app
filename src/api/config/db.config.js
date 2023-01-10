const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env.local') });

// Local mysql db connection
const dbConnector = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

dbConnector.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!")
});

module.exports = dbConnector;
