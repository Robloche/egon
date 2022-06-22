/* @flow */

import './Home.scss';
import * as React from 'react';
import {Localizer} from '../helpers/localizer';
import logo from '../assets/logo.svg';
import {useSelector} from 'react-redux';

const Home = (): React.Node => {
  // eslint-disable-next-line no-console
  console.log('Home');

  useSelector((state) => state.language);

  return (
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
        <div>{Localizer.localize('egon.foo')}</div>
      </header>
    </div>
  );
};

export default Home;
