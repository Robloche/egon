/* @flow */
/* eslint-disable no-console */

const logInfo = (...args: Array<any>): void => {
  console.log(...args);
};

const logWarning = (...args: Array<any>): void => {
  console.warn(...args);
};

const logError = (...args: Array<any>): void => {
  console.error(...args);
};

export {
  logError,
  logInfo,
  logWarning
};
