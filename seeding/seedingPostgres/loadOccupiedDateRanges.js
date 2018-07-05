console.time('load occupied date ranges');
const { Client } = require('pg');
const path = require('path');

const client = new Client({
  user: 'LHB',
  database: 'stratosphere_enhanced',
});
client.connect();

const copyOccupiedDateRanges = `
  COPY reservations(listing_id, start_date, end_date)
  FROM '${path.resolve(__dirname, '../../data/occupiedDateRanges.csv')}' DELIMITER ',' CSV HEADER;`;

client.query(copyOccupiedDateRanges, (err, res) => {
  if (err) {
    console.log('could not copy listings table');
    console.log(err);
  } else {
    console.log(`copied ${res.rowCount} rows to products!`);
    console.timeEnd('load occupied date ranges');
  }
  client.end();
});
