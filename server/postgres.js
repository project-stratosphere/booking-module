const { Client } = require('pg');

const client = new Client({
  user: 'LHB',
  host: 'localhost',
  database: 'stratosphere',
  // password: 'strat',
  // port: 3211,
});

module.exports = () => client.connect();
