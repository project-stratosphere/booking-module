/* eslint-disable no-console */
const mysql = require( './mysql' );
const path = require( 'path' );
const parser = require( 'body-parser' );
const express = require( 'express' );
const util = require( 'util' );

mysql.query = util.promisify( mysql.query );

const PORT = 3002;
const app = express();
app.use( parser.json() );

app.use( '/', express.static( path.join( __dirname, '../client/dist/' ) ) );
app.use( '/:listingID', express.static( path.join( __dirname, '../client/dist/' ) ) );

app.get( '/rooms/:listingID/bookingInfo', async ( req, res ) => {
  try {
    const listingResults = await mysql.query( `select * from userListing where id =${ req.params.listingID }` );
    const calendarResults = await mysql.query( `select * from occupiedDates where listing_id=${ req.params.listingID }` );
    const toSendBack = {};
    const dateArr = [];

    toSendBack.name = listingResults[ 0 ].name;
    toSendBack.pricePerNight = listingResults[ 0 ].price_per_night;
    toSendBack.starRating = listingResults[ 0 ].star_rating;
    toSendBack.custRevNum = listingResults[ 0 ].cust_rev_num;
    toSendBack.minStay = listingResults[ 0 ].min_stay;
    toSendBack.cleaningFee = listingResults[ 0 ].cleaning_fee;
    toSendBack.serviceFee = listingResults[ 0 ].service_fee;
    toSendBack.maxGuests = listingResults[ 0 ].max_guests;

    calendarResults.forEach( ( result ) => {
      dateArr.push( result.date );
    } );

    toSendBack.datesTaken = dateArr;
    res.status( 200 );
    res.json( toSendBack );
  } catch ( err ) {
    console.log( err );
    res.status( 404 );
  }
} );

app.listen( PORT, () => {
  console.log( `I'm in the year ${ PORT }` );
} );
