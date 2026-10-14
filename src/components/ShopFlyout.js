/* @flow */

import './ShopFlyout.scss';
import * as React from 'react';
import { Localizer } from '../helpers/localizer';
import StripeBuyButton from './StripeBuyButton';
import bookCover1 from '../assets/images/shop/book-cover_49.png';
import bookCover2 from '../assets/images/shop/book-cover_99.png';
import bookCover3 from '../assets/images/shop/book-cover_148.png';
import egonEditionsLogo1 from '../assets/images/shop/egon-editions-logo_56.png';
import egonEditionsLogo2 from '../assets/images/shop/egon-editions-logo_113.png';
import egonEditionsLogo3 from '../assets/images/shop/egon-editions-logo_169.png';
import { useLocation } from 'react-router-dom';

// Flyout appears after scrolling past this position (in px)
const scrollThreshold = 50;

const ShopFlyout = (): React.Node => {
  const { pathname } = useLocation();

  if (pathname.endsWith('/shop-confirmation')) {
    return null;
  }

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const scrollContainer = document.querySelector('.root');
    if (!scrollContainer) {
      return undefined;
    }

    const handleScroll = () => {
      setIsOpen(scrollContainer.scrollTop >= scrollThreshold);
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
      <img
        alt=''
        className='shop-flyout__cover'
        height='80'
        src={bookCover3}
        srcSet={`${bookCover1} 1x, ${bookCover2} 2x, ${bookCover3} 3x`}
        width='49' />
      <div className='shop-flyout__content'>
        <div className='shop-flyout__details'>
          <div className='shop-flyout__new'>{Localizer.localize('shop_flyout.new')}</div>
          <div className='shop-flyout__price'>17&nbsp;€</div>
          <StripeBuyButton isLight={false} />
        </div>
        <img
          alt=''
          className='shop-flyout__logo'
          height='80'
          src={egonEditionsLogo3}
          srcSet={`${egonEditionsLogo1} 1x, ${egonEditionsLogo2} 2x, ${egonEditionsLogo3} 3x`}
          width='56' />
      </div>
    </aside>
  );
};

export default ShopFlyout;