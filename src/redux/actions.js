/* @flow */

import {REDUX_TYPE_SET_LANGUAGE, REDUX_TYPE_SET_VERSION} from './constants';
import type {AppAction} from './types';

const setLanguage: (language: string) => AppAction =
  (language) => {
    return {
      language,
      type: REDUX_TYPE_SET_LANGUAGE
    };
  };

const setVersion: (version: string) => AppAction =
  (version) => {
    return {
      type: REDUX_TYPE_SET_VERSION,
      version
    };
  };

export {
  setLanguage,
  setVersion
};
