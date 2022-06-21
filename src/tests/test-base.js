/* @flow */

import {Localizer} from '../helpers/localizer';
import translationFr from '../locales/fr/translation.json';

const initializeTest = (testFuction: () => void): void => {
  Localizer.initialize('fr', {fr: translationFr})
    .then(() => {
      try {
        testFuction();
      } catch (error) {
        /* Nothing to do */
      }
    });
};

export default initializeTest;
