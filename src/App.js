/* @flow */

import './App.scss';
import * as React from 'react';
import {Localizer} from './helpers/localizer';
import {Provider} from 'react-redux';
import Test from './components/test';
import appReducer from './redux/reducers';
import {configureStore} from '@reduxjs/toolkit';
import logo from './logo.svg';

const store = configureStore({reducer: appReducer});

const App = (): React.Node => (
  <Provider store={store}>
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
        <Test />
        <a
          className='app-link'
          href='https://reactjs.org'
          rel='noopener noreferrer'
          target='_blank'>Learn React</a>
      </header>
    </div>
  </Provider>
);

export default App;
