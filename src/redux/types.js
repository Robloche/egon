/* @flow */

import {REDUX_TYPE_UPDATE_FOO} from './constants';

export type AppState = {|
  foo: boolean
|};

export type AppAction =
// Default action
  {|type: null|} |
// Update foo
  {|
    foo: boolean,
    type: typeof REDUX_TYPE_UPDATE_FOO
  |};
