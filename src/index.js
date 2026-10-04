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
import translationIt from './locales/it.json';

const translations = Object.freeze({
  en: translationEn,
  fr: translationFr,
  it: translationIt
});

const mainElement: ?HTMLElement = document.querySelector('.root');
if (mainElement) {
  // Initialize the localization module
  Localizer.initialize(['fr', 'en', 'it'], translations)
    .then((i18n) => {
      ReactDOM.createRoot(mainElement).render(
        <React.StrictMode>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </React.StrictMode>
      );
    });
} else {
  logError('No root element to render application');
}
