const path = require('path');
const parser = require('body-parser');
const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const client = new Client({
  user: 'LHB',
  host: 'localhost',
  database: 'stratosphere',
  // password: 'strat',
  // port: 3211,
});

client.connect();

const PORT = 3002;
const app = express();
app.use(cors());
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/rooms', express.static(path.join(__dirname, '../client')));
app.use('/rooms/:listingID', express.static(path.join(__dirname, '../client')));

app.get('/api/rooms/:listingID/bookingInfo', async (req, res) => {
  const { listingID } = req.params;
  const query = 'SELECT occupied_date FROM occupied_dates WHERE listing_id = $1;';

  try {
    const clientData = { occupied_dates: [] };
    const queryResults = await client.query(query, [listingID]);
    const calendarResults = queryResults.rows;
    calendarResults.forEach((result) => {
      clientData.occupied_dates.push(result.occupied_date);
    });
    res.status(200).json(clientData);
  } catch (err) {
    console.log('Error!', err);
    res.status(404);
  }
});

/* ------------------------------------------------------------
New API Routes
-------------------------------------------------------------*/
// app.post('/api/rooms/:listingID/:bookingDate', (req, res) => {
//   const client = getConnection();
//   const query = ``;
//   client.query(query);
//   res.status(204).end();
// });

// app.delete('/api/rooms/:listingID/:bookingDate', (req, res) => {
//   const client = getConnection();
//   const query = ``;
//   client.query(query);
//   res.status(204).end();
// });

// app.patch('/api/rooms/updates/:listingID/', (req, res) => {
//   const client = getConnection();
//   const { listingID } = req.params;
//   const updates = req.body;
//   const query = ``;
//   pg.query(query);
//   res.status(204).end();
// });
/* ----------------------------------------------------------*/

app.listen(PORT, () => {
  console.log(`I'm in the year ${PORT}`);
});
