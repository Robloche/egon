/* @flow */

import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Creation from './components/Creation';
import Expertises from './components/Expertises';
import Home from './components/Home';
import JoinUs from './components/JoinUs';
import LegalNotice from './components/LegalNotice';
import {Localizer} from './helpers/localizer';
import PrivacyPolicy from './components/PrivacyPolicy';
import {Provider} from 'react-redux';
import appReducer from './redux/reducers';
import {configureStore} from '@reduxjs/toolkit';
import {fetchVersion} from './helpers/version';
import {setVersion} from './redux/actions';

const store = configureStore({reducer: appReducer});

// Pass dispatch function to Localizer so that it can update store whenever language changes
Localizer.setDispatch(store.dispatch);

// Read version in JSON file (cannot throw error)
fetchVersion()
  .then((v) => store.dispatch(setVersion(v)));

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
          path='/:lang/home' />
        <Route
          element={<Home />}
          path='/home' />
        <Route
          element={<JoinUs />}
          path='/:lang/join-us' />
        <Route
          element={<JoinUs />}
          path='/join-us' />
        <Route
          element={<LegalNotice />}
          path='/:lang/legal-notice' />
        <Route
          element={<LegalNotice />}
          path='/legal-notice' />
        <Route
          element={<PrivacyPolicy />}
          path='/:lang/privacy-policy' />
        <Route
          element={<PrivacyPolicy />}
          path='/privacy-policy' />
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
