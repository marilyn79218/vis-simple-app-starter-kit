import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import {
  BASENAME,
} from '../../constants';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Start a app</h1>
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
