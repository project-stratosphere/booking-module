/* eslint-disable no-console */

import React, { Component } from 'react';
import { render } from 'react-dom';
import ModOne from './pricing_mod1/ModOne.jsx';
// import ModTwo from "./calendar_mod2/ModTwo";
// import ModThree from './guestsAndCalc_mod3/ModThree';

const axios = require( 'axios' );

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
        <div className="holder">
          <ModOne
            price={this.state.listingData.pricePerNight}
            rating={this.state.listingData.starRating}
            numReviews={this.state.listingData.custRevNum}
          />
          {/* <ModTwo /> */}
          {/* <ModThree listingData={this.state.listingData} /> */}
        </div>
      );
    }
    return null;
  }
}

render( <App />, document.getElementById( 'root' ) );
