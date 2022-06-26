/* @flow */

import {REDUX_TYPE_SET_LANGUAGE} from './constants';

export type AppState = {|
  language: string
|};

export type AppAction =
// Default action
  {|type: null|} |
// Set language
  {|
    language: string,
    type: typeof REDUX_TYPE_SET_LANGUAGE
  |};
