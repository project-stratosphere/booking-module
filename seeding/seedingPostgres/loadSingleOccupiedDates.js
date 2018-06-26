console.time('load independent occupied dates');
const { Client } = require('pg');
const path = require('path');

const client = new Client({
  user: 'LHB',
  database: 'stratosphere',
  password: 'strat',
});
client.connect();

const copyListingsTable = `
  COPY occupied_dates(listing_id, date)
  FROM '${path.resolve(__dirname, './singleOccupiedDates.csv')}' DELIMITER ',' CSV HEADER;`;

client.query(copyListingsTable, (err, res) => {
  if (err) {
    console.log('could not copy listings table');
    console.log(err);
  } else {
    console.log(`copied ${res.rowCount} rows to products!`);
    console.timeEnd('load independent occupied dates');
  }
  client.end();
});
