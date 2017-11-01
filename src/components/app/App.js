import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import {
  BASENAME,
} from '../../constants';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Start a app</h1>
        </header>
      </div>
    );
  }
}

const Root = () => (
  <Router basename={BASENAME}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
)

export default Root;
