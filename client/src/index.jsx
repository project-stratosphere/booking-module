import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h1>
        Hi!
      </h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
