import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      here: 1,
    };
  }

  render() {
    return (
      <div>
        HI!
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( "root" ) );
