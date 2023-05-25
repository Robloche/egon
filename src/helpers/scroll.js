/* @flow */

// Time to wait before actually setting IDs on all elements with a 'data-id' attribute (in ms)
const ID_DELAY = 200;

const delayedSetIds = (): void => {
  setTimeout(() => {
    // eslint-disable-next-line max-statements-per-line
    document.querySelectorAll('[data-id]').forEach((element) => {
      const dataId = element.getAttribute('data-id');
      if (dataId) {
        element.id = dataId;
      }
    });
  }, ID_DELAY);
};

const scrollTop = (el: HTMLElement, withHeader: boolean): void => {
  const root = el.closest('.root');
  if (!root) {
    return;
  }

  // Take header height into account
  const headerHeight = document.querySelector('.header')?.offsetHeight ?? 0;
  const yOffset = withHeader ? headerHeight : 0;

  const yTarget = el.getBoundingClientRect().top + root.scrollTop;
  root.scrollTo({
    behavior: 'smooth',
    top: yTarget - yOffset
  });
};

const scrollTopWithHeader = (el: HTMLElement): void => scrollTop(el, true);

const scrollTopNoHeader = (el: HTMLElement): void => scrollTop(el, false);

export {
  delayedSetIds,
  scrollTopWithHeader,
  scrollTopNoHeader
};
