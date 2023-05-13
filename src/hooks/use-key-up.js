import {useEffect} from 'react';

const useKeyUp = (key, callback) => {
  useEffect(() => {
    const handleKeyUp = (event) => {
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
