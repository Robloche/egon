/* @flow */

import './App.scss';
import * as React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import {Provider} from 'react-redux';
import Test from './components/Test';
import appReducer from './redux/reducers';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({reducer: appReducer});

const App = (): React.Node => (
  <Provider store={store}>
    <BrowserRouter>
      <nav>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/contact'>Contact</Link>
        </div>
        <div>
          <Link to='/test'>Test</Link>
        </div>
      </nav>
      <Routes>
        <Route
          element={<Contact />}
          path='/contact' />
        <Route
          element={<Test />}
          path='/test' />
        <Route
          element={<Home />}
          exact
          path='/' />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
