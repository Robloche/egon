/* @flow */

import {REDUX_TYPE_SET_LANGUAGE, REDUX_TYPE_SET_VERSION} from './constants';

export type AppState = {|
  language: string,
  version: string
|};

export type AppAction =
// Default action
  {|type: null|} |
// Set language
  {|
    language: string,
    type: typeof REDUX_TYPE_SET_LANGUAGE
  |} |
// Set version
  {|
    type: typeof REDUX_TYPE_SET_VERSION,
    version: string
  |};
