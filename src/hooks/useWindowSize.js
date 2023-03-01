/* @flow */

import {useEffect, useState} from 'react';

const useWindowSize = (): {|height: number, width: number|} => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
