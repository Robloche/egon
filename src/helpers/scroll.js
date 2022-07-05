/* @flow */

const scrollCenter = (el: HTMLElement): void => el.scrollIntoView({
  behavior: 'smooth',
  block: 'center'
});

const scrollTop = (el: HTMLElement): void => el.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});

export {
  scrollCenter,
  scrollTop
};
