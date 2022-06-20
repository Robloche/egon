/* @flow */

import i18nInstance from 'i18next';
import {initReactI18next} from 'react-i18next';

const cleanLanguage: (language: string) => string =
  (language) => {
    const [code] = language.toLowerCase().split('-');
    return code;
  };

/*
 * What this function does:
 *  - Removes duplicates
 *  - Removes country-specific codes (e.g. ["fr", "fr-BE"] and ["fr-CA"] both becomes ["fr"])
 *  - Converts to lower case
 *  - Preserves order
 */
const cleanLanguageList: (languages: $ReadOnlyArray<string>) => Array<string> =
  (languages) => {
    const langDic = {};

    if (languages) {
      let i = 0;
      languages.forEach((l) => {
        const code = cleanLanguage(l);
        if (typeof langDic[code] !== 'number') {
          langDic[code] = i;
          i += 1;
        }
      });
    }

    const langCodes = Object.keys(langDic);
    const cleanedLanguages = Array(langCodes.length);

    langCodes.forEach((code) => {
      const index = langDic[code];
      cleanedLanguages[index] = code;
    });

    return cleanedLanguages;
  };

export class Localizer {

  static instance: any;

  static language: string;

  static initialize: (language: string, translations: {[string]: any}) => Promise<*> =
    (language, translations) => {
      if (Localizer.instance) {
        return Promise.resolve();
      }

      Localizer.language = language;

      const resources = {};
      Object.entries(translations).forEach(([lang, file]) => {
        resources[lang] = {translation: file};
      });

      return i18nInstance
        .use(initReactI18next)
        .init({
          debug: false,
          defaultNS: 'translation',
          interpolation: {
            escapeValue: false
          },
          keySeparator: '.',
          lng: language,
          ns: ['translation'],
          resources
        })
        .then(() => {
          Localizer.instance = i18nInstance;
        });
    };

  static getInstance: () => any =
    () => Localizer.instance;

  static localize: (key: string, options: any) => string =
    (key, options) => Localizer.instance.t(key, options).replace(/(?: )([:!?-])/uig, '\u00A0$1').replace(/_/uig, '\u00A0');

  /*
   * What this function does:
   *  - Takes all languages defined in browser
   *  - Only keeps languages supported by application
   *  - If resulting list is empty, returns supported languages
   *  - Preserves order
   */
  static getAppLanguages: (supportedLanguages: $ReadOnlyArray<string>) => Array<string> =
    (supportedLanguages) => {
      const {language, languages} = navigator;
      const browserLanguages = cleanLanguageList(languages && languages.length ? languages : [language]);

      const appLanguages = [];
      browserLanguages.forEach((lang) => {
        const cleanLang = cleanLanguage(lang);
        if (supportedLanguages.includes(cleanLang)) {
          appLanguages.push(cleanLang);
        }
      });

      return appLanguages.length > 0 ? appLanguages : [...supportedLanguages];
    };

}
