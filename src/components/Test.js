/* @flow */

import * as React from 'react';
import {useSelector} from 'react-redux';

const Test = (): React.Node => {
  const language = useSelector((state) => state.language);

  return <div className='test'>
    <div>Test</div>
    <div>{language ?? '<undefined>'}</div>
  </div>;
};

export default Test;
