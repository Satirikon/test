import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from './main/Main';
import Manager from './manager/Manager';
import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to="/">Main</Link>
              </li>
              <li>
                <Link to="/manager">Manager</Link>
              </li>
            </ul>
          </header>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/manager" component={Manager} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
