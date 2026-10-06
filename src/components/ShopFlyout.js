/* @flow */

import './ShopFlyout.scss';
import * as React from 'react';
import { Localizer } from '../helpers/localizer';
import StripeBuyButton from './StripeBuyButton';
import bookCover from '../assets/images/shop/book-cover_49.png';
import { useLocation } from 'react-router-dom';

// Flyout appears when user scrolls down more than this threshold (in px)
const scrollThreshold = 50;

const ShopFlyout = (): React.Node => {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const scrollContainer = document.querySelector('.root');
    if (!scrollContainer) {
      return undefined;
    }

    let previousScrollTop = scrollContainer.scrollTop;
    let previousDirection = 0;
    let accumulatedScroll = 0;
    const handleScroll = () => {
      const currentScrollTop = scrollContainer.scrollTop;
      const scrollDelta = currentScrollTop - previousScrollTop;
      const direction = Math.sign(scrollDelta);

      if (direction !== 0) {
        if (direction !== previousDirection) {
          accumulatedScroll = 0;
          previousDirection = direction;
        }

        accumulatedScroll += Math.abs(scrollDelta);
        if (accumulatedScroll >= scrollThreshold) {
          setIsOpen(direction > 0);
          accumulatedScroll = 0;
        }
      }

      previousScrollTop = currentScrollTop;
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  React.useEffect(() => {
    const footer = document.querySelector('.footer');
    if (!footer) {
      return undefined;
    }

    footer.classList.toggle('footer__flyout', isOpen);
    return () => footer.classList.remove('footer__flyout');
  }, [isOpen, pathname]);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <aside
      aria-hidden={!isOpen}
      aria-label={Localizer.localize('shop.part_1.title')}
      className={`shop-flyout${isOpen ? ' shop-flyout--open' : ''}`}>
      <div className='shop-flyout__content'>
        <img
          alt=''
          className='shop-flyout__cover'
          src={bookCover} />
        <div className='shop-flyout__details'>
          <div className='shop-flyout__title'>{Localizer.localize('shop.part_1.title')}</div>
          <div className='shop-flyout__price'>17&nbsp;€</div>
        </div>
        <StripeBuyButton isLight={false} />
      </div>
    </aside>
  );
};

export default ShopFlyout;