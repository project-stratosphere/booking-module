/* eslint-disable no-console */
const path = require( 'path' );
const parser = require( 'body-parser' );
const express = require( 'express' );

const PORT = 3000;
const app = express();
app.use( parser.json() );

app.use( '/', express.static( path.join( __dirname, '../client/dist/' ) ) );
app.use( '/rooms/:listingID', express.static( path.join( __dirname, '../client/dist/' ) ) );

app.get( '/:listingID', ( req, res ) => {
  console.log( req.params );
  res.json( { result: 'hello!' } );
} );

app.listen( PORT, () => {
  console.log( `I'm in the year ${ PORT }` );
} );
