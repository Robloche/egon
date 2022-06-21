/* @flow */

import * as React from 'react';
import {useSelector} from 'react-redux';

const Test = (): React.Node => {
  const foo = useSelector((state) => state.foo);

  return <div>
    <div>Test</div>
    <div>{foo?.toString() ?? '<undefined>'}</div>
  </div>;
};

export default Test;
