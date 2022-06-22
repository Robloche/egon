/* @flow */

import LanguageDetector from 'i18next-browser-languagedetector';
import i18nInstance from 'i18next';
import {initReactI18next} from 'react-i18next';

export class Localizer {

  static instance: any;

  static language: string;

  static supportedLanguages: Array<string>;

  static initialize: (supportedLanguages: Array<string>, translations: {[string]: any}) => Promise<*> =
    (supportedLanguages, translations) => {
      if (Localizer.instance) {
        return Promise.resolve();
      }

      const resources = {};
      Object.entries(translations).forEach(([lang, file]) => {
        resources[lang] = {translation: file};
      });

      return i18nInstance
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          debug: true,
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
          Localizer.instance = i18nInstance;
          Localizer.language = i18nInstance.language;
          Localizer.supportedLanguages = supportedLanguages;
        });
    };

  static getInstance: () => any =
    () => Localizer.instance;

  static localize: (key: string, options: any) => string =
    (key, options) => Localizer.instance.t(key, options).replace(/(?: )([:!?-])/uig, '\u00A0$1').replace(/_/uig, '\u00A0');

  static changeLanguage: (language: string) => void =
    (language) => {
      Localizer.instance.changeLanguage(language);
    };

}
