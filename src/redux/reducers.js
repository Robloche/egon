/* @flow */

import {AppAction, AppState} from './types';
import {REDUX_TYPE_UPDATE_FOO} from './constants';

const DefaultState: AppState = {
  foo: false
};

const DefaultAction: AppState = {type: null};

const appReducer: (state: AppState, action: AppAction) => AppState =
  (state = DefaultState, action = DefaultAction) => {
    switch (action.type) {
      case REDUX_TYPE_UPDATE_FOO:
        return {
          ...state,
          foo: action.foo
        };

      default:
        return state;
    }
  };

export default appReducer;
