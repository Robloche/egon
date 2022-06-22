/* @flow */

import './index.scss';
import App from './App';
import {I18nextProvider} from 'react-i18next';
import {Localizer} from './helpers/localizer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {logError} from './helpers/debug';
import translationEn from './locales/en.json';
import translationFr from './locales/fr.json';

const mainElement: ?HTMLElement = document.getElementById('root');
if (!mainElement) {
  logError('No "root" element to render application');
}

const translations = Object.freeze({
  en: translationEn,
  fr: translationFr
});

// Initialize the localization module
Localizer.initialize(['fr', 'en'], translations)
  .then(() => {
    ReactDOM.createRoot(mainElement).render(
      <React.StrictMode>
        <I18nextProvider i18n={Localizer.getInstance()}>
          <App />
        </I18nextProvider>
      </React.StrictMode>
    );
  });

/*
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 *
 * reportWebVitals();
 */
