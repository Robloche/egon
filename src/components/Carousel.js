/* @flow */

import './Carousel.scss';
import * as React from 'react';
import {scrollTopNoHeader, scrollTopWithHeader} from '../helpers/scroll';
import {useCallback, useEffect, useRef, useState} from 'react';
import Bullet from './Bullet';
import {HashLink} from 'react-router-hash-link';
import {Localizer} from '../helpers/localizer';
import Menu from './Menu';
import egonLogo from '../assets/svg/logo-white.svg';
import {useInView} from 'react-intersection-observer';
import {useSelector} from 'react-redux';
import {useSwipeable} from 'react-swipeable';
import useWindowSize from '../hooks/use-window-size';

// Image changes every 15s (in ms);
const IMAGE_SWITCH_TIMEOUT = 15_000;

/* eslint-disable react/require-default-props */
type DefaultProps = {|
  +logo?: boolean,
  +menu?: boolean,
  +slideContentRenderer?: (index: number) => React.Element<any> | null
|};
/* eslint-enable react/require-default-props */

type CarouselProps = {
  ...DefaultProps,
  +className: string,
  +id: string,
  +pageCount: number,
  +scrollLink: string
};

const Carousel = ({
  className,
  id,
  logo = false,
  menu = false,
  pageCount,
  scrollLink,
  slideContentRenderer
}: CarouselProps): React.Node => {
  const language = useSelector((state) => state.language);
  const {inView, ref: refInView} = useInView();
  const [windowHeight, windowWidth] = useWindowSize();

  const images = [];
  for (let i = 1; i <= pageCount; ++i) {
    images.push(i);
  }

  const previousIndex = (index: number) => (index - 1 + pageCount) % pageCount;

  const nextIndex = useCallback((index: number) => (index + 1) % pageCount, [pageCount]);

  const {onMouseDown, ref} = useSwipeable({
    onSwipedLeft: () => {
      clearTimeout(imageSwitchTimerRef.current);
      setCurrentIndex(nextIndex);
    },
    onSwipedRight: () => {
      clearTimeout(imageSwitchTimerRef.current);
      setCurrentIndex(previousIndex);
    },
    trackMouse: true
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const imageSwitchTimerRef = useRef<TimeoutID | null>(null);

  useEffect(() => {
    if (inView) {
      imageSwitchTimerRef.current = setTimeout(() => {
        setCurrentIndex(nextIndex);
      }, IMAGE_SWITCH_TIMEOUT);
    }

    return () => {
      clearTimeout(imageSwitchTimerRef.current);
      imageSwitchTimerRef.current = null;
    };
  }, [currentIndex, inView, nextIndex]);

  const handleBulletOnClick = useCallback((index: number) => {
    if (index === currentIndex) {
      return;
    }

    clearTimeout(imageSwitchTimerRef.current);
    setCurrentIndex(index);
  }, [currentIndex]);

  return (
    <div
      className={`carousel ${className}`}
      data-id={id}
      style={{
        height: `${windowHeight}px`,
        width: `${windowWidth}px`
      }}>
      <div
        className='carousel__slider'
        onMouseDown={onMouseDown}
        ref={ref}>
        {images.map((img, index) => (
          <div
            className={`carousel__slide image${index + 1} ${index === currentIndex ? 'visible' : ''}`}
            data-index={index}
            key={`image${img}`}>
            {slideContentRenderer ? (
              <div className='slide__text-container'>
                {slideContentRenderer(index)}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className='carousel__buttons'>{images.map((img, index) => <Bullet
        index={index}
        isFull={index <= currentIndex}
        key={`image${img}`}
        onClick={handleBulletOnClick} />)}</div>
      <div className='carousel__scroll'>
        <div
          className={`carousel__scroll-line ${inView ? 'visible' : ''}`}
          ref={refInView} />
        <HashLink
          className='carousel__scroll-text'
          scroll={menu ? scrollTopNoHeader : scrollTopWithHeader}
          smooth
          to={`/${language}/home#${scrollLink}`}>{Localizer.localize('agency.scroll')}</HashLink>
      </div>
      {menu ? <Menu /> : null}
      {logo ? (
        <img
          alt='Logo Egon Paris'
          className='logo'
          draggable={false}
          src={egonLogo} />
      ) : null}
    </div>
  );
};

export default Carousel;
