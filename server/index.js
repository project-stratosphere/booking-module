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

app.get( '/rooms/:listingID', async ( req, res ) => {
  console.log( req.params.listingID );
  try {
    const results = await mysql.query( `select * from userListing where id =${ req.params.listingID }` );
    console.log( results );
  } catch ( err ) {
    console.log( err );
  }
  res.json( { result: req.params } );
} );

app.listen( PORT, () => {
  console.log( `I'm in the year ${ PORT }` );
} );
