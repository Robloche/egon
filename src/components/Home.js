/* @flow */

import * as React from 'react';
import {Localizer} from '../helpers/localizer';
import logo from '../assets/logo.svg';

const Home = (): React.Node => (
  <div className='app'>
    <header className='app-header'>
      <img
        alt='logo'
        className='app-logo'
        src={logo} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <div>{Localizer.localize('egon.foo', {test: 'teeeeest'})}</div>
      <div>{Localizer.localize('egon.bar')}</div>
      <a
        className='app-link'
        href='https://reactjs.org'
        rel='noopener noreferrer'
        target='_blank'>Learn React</a>
    </header>
  </div>
);

export default Home;
