import React, { Component } from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import axios from 'axios';
import ModOne from './pricing_mod1/ModOne';
// import ModTwo from "./calendar_mod2/ModTwo";
import ModThree from './guestsAndCalc_mod3/ModThree';

injectGlobal( [ `
  html, body{
    height: 100%;
    width: 100%
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
` ] );

export const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;  
  height: 300px;
  border: 1px solid rgb(172, 172, 172);
  font-family: Quicksand;
`;

export default class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
    };
  }

  componentDidMount() {
    this.getPathname().then( () => {
      this.getListingData();
    } );
  }

  getPathname = () => new Promise( ( resolve ) => {
    let id = window.location.pathname;
    if ( id === '/' ) {
      id = 1;
    } else {
      id = id.replace( /\//g, '' );
    }
    resolve( this.setState( {
      pathname: id,
    } ) );
  } )

  getListingData = () => {
    axios.get( `http://127.0.0.1:3002/rooms/${ this.state.pathname }/bookingInfo/` )
      .then( ( response ) => {
        this.setState( {
          listingData: response.data,
        } );
      } )
      .catch( ( error ) => {
        console.log( error );
      } );
  }

  render() {
    if ( this.state.listingData ) {
      return (
        <Holder>
          <ModOne
            price={this.state.listingData.pricePerNight}
            rating={this.state.listingData.starRating}
            numReviews={this.state.listingData.custRevNum}
          />
          {/* <ModTwo /> */}
          <ModThree
            cleaningFee={this.state.listingData.cleaningFee}
            maxGuests={this.state.listingData.maxGuests}
            minStay={this.state.listingData.minStay}
            serviceFee={this.state.listingData.serviceFee}
          />
        </Holder>
      );
    }
    return null;
  }
}

render( <App />, document.getElementById( 'root' ) );
