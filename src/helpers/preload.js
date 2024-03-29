/* @flow */

/* eslint-disable no-magic-numbers */
const getImageWidth = (): number => {
  const width = document.body?.offsetWidth;

  if (typeof width !== 'undefined') {
    if (width <= 400) {
      return 400;
    } else if (width <= 900) {
      return 900;
    } else if (width <= 1400) {
      return 1400;
    }
  }

  return 1920;
};
/* eslint-enable no-magic-numbers */

const preloadCarouselImages = (name: string, count: number): void => {
  const width = getImageWidth();

  for (let i = 1; i <= count; ++i) {
    new Image().src = `../assets/images/${name}${i}_${width}.png`;
  }
};

export {
  preloadCarouselImages
};
