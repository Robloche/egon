/* @flow */

import {logError, logInfo} from './debug';

const fetchVersion = async(): Promise<string> => {
  try {
    const response = await fetch('/version.json');
    const json = await response.json();
    return json.version;
  } catch (error) {
    // Don't print expected error in local dev environment (missing file)
    if (error.message.indexOf('is not valid JSON') === -1) {
      logInfo('Error fetching version');
      logError(error);
    }
    return '';
  }
};

export {
  fetchVersion
};
