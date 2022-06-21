/* @flow */

import {AppAction} from './types';
import {REDUX_TYPE_UPDATE_FOO} from './constants';

const updateFoo: (foo: boolean) => AppAction =
  (foo) => {
    return {
      foo,
      type: REDUX_TYPE_UPDATE_FOO
    };
  };

export {
  updateFoo
};
