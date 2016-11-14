import React from 'react';
import { BrowserRouter as Router, Match, Link } from 'react-router';
import LazilyLoad, { importLazy } from './LazilyLoad';

export default function App() {
  return (
    <div>
      <h1>RR4 Code Splitting</h1>
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>
            <Link to="/about">About</Link>
          </div>

          <Match pattern="/" exactly render={
            () => (
              <LazilyLoad modules={{
                Home: () => importLazy(System.import('./Home'))
              }}>
                {
                  ({ Home }) => (
                    <Home />
                  )
                }
              </LazilyLoad>
            )
          } />

          <Match pattern="/list" render={
            () => (
              <LazilyLoad modules={{
                List: () => importLazy(System.import('./List'))
              }}>
                {
                  ({ List }) => (
                    <List />
                  )
                }
              </LazilyLoad>
            )
          } />

          <Match pattern="/about" render={
            () => (
              <LazilyLoad modules={{
                About: () => importLazy(System.import('./About'))
              }}>
                {
                  ({ About }) => (
                    <About />
                  )
                }
              </LazilyLoad>
            )
          } />
        </div>
      </Router>
    </div>
  )
}
