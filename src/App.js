/* @flow */

import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Creation from './components/Creation';
import Expertises from './components/Expertises';
import Home from './components/Home';
import JoinUs from './components/JoinUs';
import {Localizer} from './helpers/localizer';
import {Provider} from 'react-redux';
import SplashScreen from './components/SplashScreen';
import appReducer from './redux/reducers';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({reducer: appReducer});

// Pass dispatch function to Localizer so that it can update store whenever language changes
Localizer.setDispatch(store.dispatch);

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
          element={<Creation />}
          path='/:lang/creation' />
        <Route
          element={<Creation />}
          path='/creation' />
        <Route
          element={<Expertises />}
          path='/:lang/expertises' />
        <Route
          element={<Expertises />}
          path='/expertises' />
        <Route
          element={<Home />}
          exact
          path='/:lang/home' />
        <Route
          element={<Home />}
          exact
          path='/home' />
        <Route
          element={<JoinUs />}
          exact
          path='/:lang/join-us' />
        <Route
          element={<JoinUs />}
          exact
          path='/join-us' />
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
