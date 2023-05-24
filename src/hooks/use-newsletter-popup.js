/* @flow */

import {useState} from 'react';

const useNewsletterPopup = (): [boolean, () => void, () => void] => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return [isVisible, show, hide];
};

export default useNewsletterPopup;
