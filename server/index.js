/* eslint-disable no-console */
const mysql = require('./mysql');
const path = require('path');
const parser = require('body-parser');
const express = require('express');
const util = require('util');
const cors = require('cors');

mysql.query = util.promisify(mysql.query);

const PORT = 3002;
const app = express();
app.use(parser.json());
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../client/dist/')));
app.use('/:listingID', express.static(path.join(__dirname, '../client/dist/')));

app.get('/rooms/:listingID/bookingInfo', async (req, res) => {
  const { listingID } = req.params;
  const listingResultsQuery = `select * from userListing where id =${listingID}`;
  const calendarResultsQuery = `select * from occupiedDates where listing_id =${listingID}`;
  try {
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

app.listen(PORT, () => {
  console.log(`I'm in the year ${PORT}`);
});
