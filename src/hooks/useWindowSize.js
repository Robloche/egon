/* @flow */

import {useEffect, useState} from 'react';

const useWindowSize = (): {|height: number, width: number|} => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
