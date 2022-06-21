/* @flow */

import type {AppAction} from './types';
import {REDUX_TYPE_SET_LANGUAGE} from './constants';

const setLanguage: (language: string) => AppAction =
  (language) => {
    return {
      language,
      type: REDUX_TYPE_SET_LANGUAGE
    };
  };

export {
  setLanguage
};
