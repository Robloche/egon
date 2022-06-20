/* @flow */

import './App.scss';
import * as React from 'react';
import logo from './logo.svg';

const App = (): React.Node => (
  <div className='app'>
    <header className='app-header'>
      <img
        alt='logo'
        className='app-logo'
        src={logo} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='app-link'
        href='https://reactjs.org'
        rel='noopener noreferrer'
        target='_blank'>Learn React</a>
    </header>
  </div>
);

export default App;
