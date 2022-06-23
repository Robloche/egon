/* @flow */

import {REDUX_TYPE_SET_LANGUAGE, REDUX_TYPE_SPLASH_SCREEN_SHOWN} from './constants';

export type AppState = {|
  isSplashScreenShown: boolean,
  language: string
|};

export type AppAction =
// Default action
  {|type: null|} |
// Set language
  {|
    language: string,
    type: typeof REDUX_TYPE_SET_LANGUAGE
  |} |
// Set splash screen shown
  {|type: typeof REDUX_TYPE_SPLASH_SCREEN_SHOWN|};
