/* @flow */

export const Mode = Object.freeze({
  Dark: 'Dark',
  Light: 'Light'
});

export type ModeType = $Keys<typeof Mode>;
