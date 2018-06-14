const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'cat',
  password: 'password',
  database: 'booking',
  port: 3306,
});

connection.connect();

module.exports = connection;
