import React from 'react';
import { BrowserRouter as Router, Match } from 'react-router';
import Home from './Home';
import List from './List';
import About from './About';

export default function App() {
  return (
    <div>
      <h1>RR4 Code Splitting</h1>
      <Router>
        <div>
          <Match pattern="/" exactly render={
            () => <Home />
          } />
          <Match pattern="/list" render={
            () => <List />
          } />
          <Match pattern="/about" render={
            () => <About />
          } />
        </div>
      </Router>
    </div>
  )
}
