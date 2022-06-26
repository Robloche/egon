/* @flow */

import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Expertise from './components/Expertise';
import Home from './components/Home';
import {Provider} from 'react-redux';
import SplashScreen from './components/SplashScreen';
import appReducer from './redux/reducers';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({reducer: appReducer});

const App = (): React.Node => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          element={<Contact />}
          path='/:lang/contact' />
        <Route
          element={<Contact />}
          path='/contact' />
        <Route
          element={<Expertise />}
          path='/:lang/test' />
        <Route
          element={<Expertise />}
          path='/test' />
        <Route
          element={<Home />}
          exact
          path='/:lang/home' />
        <Route
          element={<Home />}
          exact
          path='/home' />
        <Route
          element={<SplashScreen />}
          exact
          path='/:lang' />
        <Route
          element={<SplashScreen />}
          exact
          path='/' />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
