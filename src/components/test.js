/* @flow */

import React from 'react';
import {useSelector} from 'react-redux';

const Test = () => {
  const foo = useSelector((state) => state.foo);

  return <div>{foo?.toString() ?? '<undefined>'}</div>;
};

export default Test;
