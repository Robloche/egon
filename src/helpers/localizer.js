/* @flow */

import LanguageDetector from 'i18next-browser-languagedetector';
import i18nInstance from 'i18next';
import { initReactI18next } from 'react-i18next';
import { setLanguage } from '../redux/actions';

type ResourcesI18Next = {|
  [string]: {| translation: string |}
|};

type LocalizeOptions = Record<string, mixed>;

export class Localizer {

  static dispatch: any;

  static #instance: any;

  static language: string;

  static supportedLanguages: $ReadOnlyArray<string>;

  static initialize: (supportedLanguages: $ReadOnlyArray<string>, translations: {| +[string]: any |}) => Promise<any> =
    (supportedLanguages, translations) => {
      if (Localizer.#instance) {
        return Promise.resolve(Localizer.#instance);
      }

      const resources: ResourcesI18Next = {};
      Object.entries(translations).forEach(([lang, file]) => {
        resources[lang] = { translation: file };
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
          Localizer.dispatch(setLanguage(Localizer.language));
          return i18nInstance;
        });
    };

  static setDispatch: (dispatch: any) => void =
    (dispatch) => {
      Localizer.dispatch = dispatch;
    };

  static localize: (key: string, options?: LocalizeOptions) => string =
    (key, options) => {
      const rawText = Localizer.#instance.t(key, options);

      const replacements: Record<string, string> = {
        ' ': '\u00A0',
        ' »': '\u00A0»',
        _: '\u00A0',
        '« ': '«\u00A0',
      };

      return rawText
        // Apply French punctuation & space replacements in a single pass
        .replace(/(?: )([:!?-])|« | »|_/uig, (match, p1) => {
          if (p1) {
            return `\u00A0${p1}`;
          }
          return replacements[match] || match;
        });
    };

  static changeLanguage: (language: string) => void =
    (language) => {
      Localizer.#instance.changeLanguage(language)
        .then(() => {
          Localizer.dispatch(setLanguage(language));

          const { location: { href, pathname } } = window;
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
