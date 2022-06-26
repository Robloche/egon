/* @flow */

import type {AppAction, AppState} from './types';
import {REDUX_TYPE_SET_LANGUAGE} from './constants';

const DefaultState: AppState = {
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

      default:
        return state;
    }
  };

export default appReducer;
