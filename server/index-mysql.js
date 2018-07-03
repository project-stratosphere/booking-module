/* eslint-disable no-console */
const getConnection = require('./mysql');
const path = require('path');
const parser = require('body-parser');
const express = require('express');
const util = require('util');
const cors = require('cors');

const PORT = 3002;
const app = express();
app.use(parser.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/rooms', express.static(path.join(__dirname, '../client')));
app.use('/rooms/:listingID', express.static(path.join(__dirname, '../client')));

app.get('/api/rooms/:listingID/bookingInfo', async (req, res) => {
  const { listingID } = req.params;
  const listingResultsQuery = `select * from userListing where id =${listingID}`;
  const calendarResultsQuery = `select * from occupiedDates where listing_id =${listingID}`;
  try {
    const mysql = getConnection();
    mysql.query = util.promisify(mysql.query);

    const listingResults = await mysql.query(listingResultsQuery);
    const calendarResults = await mysql.query(calendarResultsQuery);
    const toSendBack = {};
    const dateArr = [];

    calendarResults.forEach((result) => {
      dateArr.push(result.date);
    });
    toSendBack.datesTaken = dateArr;
    toSendBack.name = listingResults[0].name;
    toSendBack.pricePerNight = listingResults[0].price_per_night;
    toSendBack.starRating = listingResults[0].star_rating;
    toSendBack.custRevNum = listingResults[0].cust_rev_num;
    toSendBack.minStay = listingResults[0].min_stay;
    toSendBack.cleaningFee = listingResults[0].cleaning_fee;
    toSendBack.serviceFee = listingResults[0].service_fee;
    toSendBack.maxGuests = listingResults[0].max_guests;

    res.status(200).json(toSendBack);
  } catch (err) {
    res.status(404);
  }
});

/* ------------------------------------------------------------
New API Routes
-------------------------------------------------------------*/
app.post('/api/rooms/:listingID/:bookingDate', (req, res) => {
  const mySql = getConnection();
  const query = ``;
  mySql.query(query);
  res.status(204).end();
});

app.delete('/api/rooms/:listingID/:bookingDate', (req, res) => {
  const mySql = getConnection();
  const query = ``;
  mySql.query(query);
  res.status(204).end();
});

app.patch('/api/rooms/updates/:listingID/', (req, res) => {
  const mySql = getConnection();
  const { listingID } = req.params;
  const updates = req.body;
  const query = ``;
  mySql.query(query);
  res.status(204).end();
});
/* ----------------------------------------------------------*/

app.listen(PORT, () => {
  console.log(`I'm in the year ${PORT}`);
});
