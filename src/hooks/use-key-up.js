/* @flow */

import {useEffect} from 'react';

const useKeyUp = (key: string, callback: (SyntheticKeyboardEvent<HTMLElement>) => void) => {
  useEffect(() => {
    const handleKeyUp = (event: SyntheticKeyboardEvent<HTMLElement>) => {
      // $FlowFixMe: Flow doesn't know "code"
      const {code} = event;

      if (code === key) {
        event.preventDefault();
        callback(event);
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [callback, key]);
};

export default useKeyUp;
