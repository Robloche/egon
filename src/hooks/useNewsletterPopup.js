/* @flow */

import {useState} from 'react';

const useNewsletterPopup = (): {|isVisible: boolean, toggle: () => void|} => {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    setIsVisible(!isVisible);
  }

  return {
    isVisible,
    toggle
  };
};

export default useNewsletterPopup;
