/* @flow */

import LanguageDetector from 'i18next-browser-languagedetector';
import i18nInstance from 'i18next';
import {initReactI18next} from 'react-i18next';

export class Localizer {

  static #instance: any;

  static language: string;

  static supportedLanguages: Array<string>;

  static initialize: (supportedLanguages: Array<string>, translations: {[string]: any}) => Promise<*> =
    (supportedLanguages, translations) => {
      if (Localizer.#instance) {
        return Promise.resolve(Localizer.#instance);
      }

      const resources = {};
      Object.entries(translations).forEach(([lang, file]) => {
        resources[lang] = {translation: file};
      });

      return i18nInstance
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          debug: false,
          defaultNS: 'translation',
          detection: {
            lookupCookie: 'i18next',
            lookupFromPathIndex: 0,
            lookupFromSubdomainIndex: 0,
            lookupLocalStorage: 'i18nextLng',
            lookupQuerystring: 'lng',
            lookupSessionStorage: 'i18nextLng',
            order: ['path', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'subdomain']
          },
          fallbackLng: supportedLanguages[0],
          interpolation: {
            escapeValue: false
          },
          keySeparator: '.',
          ns: Object.keys(translations),
          resources,
          supportedLngs: supportedLanguages
        })
        .then(() => {
          Localizer.#instance = i18nInstance;
          Localizer.language = i18nInstance.language;
          Localizer.supportedLanguages = supportedLanguages;
          return i18nInstance;
        });
    };

  static localize: (key: string, options: any) => string =
    (key, options) => Localizer.#instance.t(key, options).replace(/(?: )([:!?-])/uig, '\u00A0$1').replace(/_/uig, '\u00A0');

  static changeLanguage: (language: string) => void =
    (language) => {
      Localizer.#instance.changeLanguage(language)
        .then(() => {
          const {location: {href, pathname}} = window;
          const regex = new RegExp(`/(${Localizer.supportedLanguages.join('|')})/`, 'ui');
          const newUrl = new URL(href);

          const ma = pathname.match(regex);
          if (ma) {
            // Replace
            newUrl.pathname = pathname.replace(ma[0], `/${language}/`);
          } else {
            // Add
            newUrl.pathname = `/${language}${pathname}`;
          }

          // Check replace vs navigate
          window.location.replace(newUrl);
        });
    };

}
