/* @flow */

import './App.scss';
import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import {Provider} from 'react-redux';
import Test from './components/Test';
import appReducer from './redux/reducers';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({reducer: appReducer});

const App = (): React.Node => (
  <Provider store={store}>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route
          element={<Contact />}
          path='/:lang/contact' />
        <Route
          element={<Test />}
          path='/:lang/test' />
        <Route
          element={<Home />}
          exact
          path='/:lang/home' />
        <Route
          element={<Home />}
          exact
          path='/:lang' />
        <Route
          element={<Home />}
          exact
          path='/' />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
