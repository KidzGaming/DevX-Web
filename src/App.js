import React, { Component } from 'react';
import './App.css';
import { Feed, Post } from './components/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Link to='/feed'>Feed</Link>
        </Router>
        <Route exact path='/feed'>
          <Feed />
        </Route>
      </div>
    );
  }
}

export default App;
