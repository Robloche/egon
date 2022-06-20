/* @flow */

import './index.scss';
import App from './App';
import {I18nextProvider} from 'react-i18next';
import {Localizer} from './helpers/localizer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {logError} from './helpers/debug';
import translationEn from './locales/en/translation.json';
import translationFr from './locales/fr/translation.json';

const mainElement: ?HTMLElement = document.getElementById('root');
if (!mainElement) {
  logError('No "root" element to render application');
}

const translations = {
  en: translationEn,
  fr: translationFr
};

// Languages supported by application
export const APP_SUPPORTED_LANGUAGES = ['fr', 'en'];

// Get the best from supported languages and browser's languages
export const APP_LANGUAGES: Array<string> = Localizer.getAppLanguages(APP_SUPPORTED_LANGUAGES);

// First app language wins jackpot and is promoted official language for this session
export const [APP_LANGUAGE] = APP_LANGUAGES;

// Initialize the localization module
Localizer.initialize(APP_LANGUAGE, {[APP_LANGUAGE]: translations[APP_LANGUAGE]})
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
