/* @flow */

import './Carousel.scss';
import * as React from 'react';
import {useCallback, useEffect, useRef, useState} from 'react';
import Bullet from './Bullet';
import {HashLink} from 'react-router-hash-link';
import {Localizer} from '../helpers/localizer';
import Menu from './Menu';
import logo from '../assets/svg/logo-white.svg';
import {scrollTop} from '../helpers/scroll';
import {useSelector} from 'react-redux';
import {useSwipeable} from 'react-swipeable';
import useWindowSize from '../hooks/useWindowSize';

// Image changes every 5s;
const IMAGE_SWITCH_TIMEOUT = 5000;

const LAST_SLIDE_INDEX = 4;

const IMAGES = ['image1', 'image2', 'image3', 'image4', 'image5'];

const previousIndex = (index) => (index - 1 + IMAGES.length) % IMAGES.length;
const nextIndex = (index) => (index + 1) % IMAGES.length;

const renderSlideContent = (index: number): React.Element<*> => {
  if (index < LAST_SLIDE_INDEX) {
    return (
      <>
        <div className='slide__text-pre'>{Localizer.localize(`manifest.page${index + 1}.pre`)}</div>
        <div className='slide__text-title'>{Localizer.localize(`manifest.page${index + 1}.title`)}</div>
      </>
    );
  }

  return <img
    alt='Logo Egon Paris'
    className='slide__logo'
    src={logo} />;
};

const Carousel = (): React.Node => {
  const language = useSelector((state) => state.language);

  const {height: windowHeight, width: windowWidth} = useWindowSize();

  const {onMouseDown, ref} = useSwipeable({
    onSwipedLeft: () => {
      clearTimeout(imageSwitchTimer.current);
      setCurrentIndex(nextIndex);
    },
    onSwipedRight: () => {
      clearTimeout(imageSwitchTimer.current);
      setCurrentIndex(previousIndex);
    },
    trackMouse: true
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const imageSwitchTimer = useRef(null);

  useEffect(() => {
    imageSwitchTimer.current = setTimeout(() => {
      setCurrentIndex(nextIndex);
    }, IMAGE_SWITCH_TIMEOUT);

    return () => {
      clearTimeout(imageSwitchTimer.current);
    };
  }, [currentIndex]);

  const handleBulletOnClick = useCallback((index) => {
    if (index === currentIndex) {
      return;
    }

    clearTimeout(imageSwitchTimer.current);
    setCurrentIndex(index);
  }, [currentIndex]);

  return (
    <div
      className='carousel'
      style={{
        height: `${windowHeight}px`,
        width: `${windowWidth}px`
      }}>
      <div
        className='carousel__slider'
        onMouseDown={onMouseDown}
        ref={ref}>
        {IMAGES.map((img, index) => (
          <div
            className={`carousel__slide image${index + 1} ${index === currentIndex ? 'visible' : ''}`}
            data-index={index}
            key={img.toString()}>
            <div className='slide__text-container'>
              {renderSlideContent(index)}
              <div className='slide__text-content'>{Localizer.localize(`manifest.page${index + 1}.text`)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='carousel__buttons'>{IMAGES.map((img, index) => <Bullet
        index={index}
        isFull={index <= currentIndex}
        key={img.toString()}
        onClick={handleBulletOnClick} />)}</div>
      <div className='carousel__scroll'>
        <div className='carousel__scroll-line' />
        <HashLink
          className='carousel__scroll-text'
          scroll={scrollTop}
          smooth
          to={`/${language}/home#egon`}>{Localizer.localize('agency.scroll')}</HashLink>
      </div>
      <Menu />
    </div>
  );
};

export default Carousel;
