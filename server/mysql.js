const mysql = require('mysql');
const util = require('util');

const prodConfig = {
  host: 'db',
  user: 'cat',
  password: 'password',
  database: 'Booking',
  port: 3306,
};

const devConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Booking',
};

let connection = mysql.createConnection(prodConfig);

function tryToConnect() {
  connection = mysql.createConnection(prodConfig);
  connection.connect = util.promisify(connection.connect);
  connection.connect()
    .then(() => {
      console.log('SUCCESS. Connected to mysql.');
    })
    .catch((err) => {
      console.log('Could not connect to mysql', err);
      setTimeout(() => tryToConnect(), 10000);
    });
}

tryToConnect();

function getConnection() {
  return connection;
}

module.exports = getConnection;
