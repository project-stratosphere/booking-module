/* eslint-disable no-console */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModOne from './pricing_mod1/ModOne.jsx';
// import ModTwo from "./calendar_mod2/ModTwo";
// import ModThree from "./guestsAndCalc_mod3/ModThree";

const axios = require( 'axios' );

export default class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
    };
  }

  componentDidMount() {
    axios.get( 'http://127.0.0.1:3000/50' )
      .then( ( response ) => {
        console.log( response );
      } );
  }

  render() {
    return (
      <div className="holder">
        {/* <ModOne /> */}
        HI!
        {/* <ModTwo />
        <ModThree /> */}
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( 'root' ) );
