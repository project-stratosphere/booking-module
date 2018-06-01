import React, { Component } from "react";
import ReactDOM from "react-dom";
import ModOne from "./pricing_mod1/ModOne";
// import ModTwo from "./calendar_mod2/ModTwo";
// import ModThree from "./guestsAndCalc_mod3/ModThree";

export default class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
    };
  }

  render() {
    return (
      <div className="holder">
        <ModOne />
        {/* <ModTwo />
        <ModThree /> */}
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( "root" ) );
