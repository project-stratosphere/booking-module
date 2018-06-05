/* eslint-disable no-console */

import React, { Component } from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import axios from 'axios';
import util from 'util';
import ModOne from './pricing_mod1/ModOne';
// import ModTwo from "./calendar_mod2/ModTwo";
// import ModThree from './guestsAndCalc_mod3/ModThree';

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
      this.getListingData( this.state.pathname );
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

  getListingData = ( id ) => {
    let idToUse = id;
    if ( !idToUse ) {
      idToUse = 1;
    }
    axios.get( `http://127.0.0.1:3002/rooms/${ idToUse }/bookingInfo/` )
      .then( ( response ) => {
        this.setState( {
          listingData: response.data,
        } );
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
          {/* <ModThree listingData={this.state.listingData} /> */}
        </Holder>
      );
    }
    return null;
  }
}

render( <App />, document.getElementById( 'root' ) );
