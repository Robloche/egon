/* @flow */

import {REDUX_TYPE_SET_LANGUAGE, REDUX_TYPE_SPLASH_SCREEN_SHOWN} from './constants';
import type {AppAction} from './types';

const setLanguage: (language: string) => AppAction =
  (language) => {
    return {
      language,
      type: REDUX_TYPE_SET_LANGUAGE
    };
  };

const setSplashScreenShown: () => AppAction =
  () => {
    return {type: REDUX_TYPE_SPLASH_SCREEN_SHOWN};
  };

export {
  setLanguage,
  setSplashScreenShown
};
