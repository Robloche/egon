/* @flow */

import type {AppAction, AppState} from './types';
import {REDUX_TYPE_SET_LANGUAGE, REDUX_TYPE_SET_VERSION} from './constants';

const DefaultState: AppState = {
  language: 'fr',
  version: ''
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

      case REDUX_TYPE_SET_VERSION:
        return {
          ...state,
          version: action.version
        };

      default:
        return state;
    }
  };

export default appReducer;
