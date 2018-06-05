/* eslint-disable no-console */

import React, { Component } from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import axios from 'axios';
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

const Holder = styled.div`
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
    const id = this.getPathname();
    this.state = {
      pathname: id,
    };
  }

  componentDidMount() {
    this.getPathname();
    this.getListingData( this.state.pathname );
  }

  getPathname = () => {
    const id = window.location.pathname;
    if ( id === '/' ) {
      return 1;
    }
    return id.substr( 1 );
  }

  getListingData = ( id ) => {
    let idToUse = id;
    if ( !idToUse ) {
      idToUse = 1;
    }
    axios.get( `http://127.0.0.1:3002/rooms/${ idToUse }` )
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
