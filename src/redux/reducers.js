/* @flow */

import type {AppAction, AppState} from './types';
import {REDUX_TYPE_SET_LANGUAGE, REDUX_TYPE_SPLASH_SCREEN_SHOWN} from './constants';

const DefaultState: AppState = {
  isSplashScreenShown: false,
  language: 'fr'
};

const DefaultAction: AppAction = {type: null};

const appReducer: (state: AppState, action: AppAction) => AppState =
  (state = DefaultState, action = DefaultAction) => {
    switch (action.type) {
      case REDUX_TYPE_SET_LANGUAGE:
        return {
          ...state,
          language: action.language
        };

      case REDUX_TYPE_SPLASH_SCREEN_SHOWN:
        return {
          ...state,
          isSplashScreenShown: true
        };

      default:
        return state;
    }
  };

export default appReducer;
