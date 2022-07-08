/* @flow */

const scrollTop = (el: HTMLElement): void => {
  const root = el.closest('.root');
  if (!root) {
    return;
  }

  // Take header height into account
  const header = document.querySelector('.header');
  const yOffset = header?.offsetHeight ?? 0;

  const yTarget = el.getBoundingClientRect().top + root.scrollTop;
  root.scrollTo({
    behavior: 'smooth',
    top: yTarget - yOffset
  });
};

export {
  scrollTop
};
