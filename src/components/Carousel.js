/* @flow */

import './Carousel.scss';
import * as React from 'react';
import {useCallback, useEffect, useRef, useState} from 'react';
import Bullet from './Bullet';
import {HashLink} from 'react-router-hash-link';
import {Localizer} from '../helpers/localizer';
import image1 from '../assets/images/manifest1.png';
import image2 from '../assets/images/manifest2.png';
import image3 from '../assets/images/manifest3.png';
import image4 from '../assets/images/manifest4.png';
import {scrollCenter} from '../helpers/scroll';
import {useSelector} from 'react-redux';

// Image changes every 5s;
const IMAGE_SWITCH_TIMEOUT = 5000;

const IMAGES = [image1, image2, image3, image4];

const nextIndex = (index) => (index + 1) % IMAGES.length;

const Carousel = (): React.Node => {
  const language = useSelector((state) => state.language);

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
    <div className='carousel'>
      <div className='carousel__slider'>
        {IMAGES.map((img, index) => (
          <div
            className={`carousel__slide ${index === currentIndex ? 'visible' : ''}`}
            data-index={index}
            key={img.toString()}
            style={{backgroundImage: `url(${img})`}}>
            <div className='slide__text-container'>
              <div className='slide__text-pre'>{Localizer.localize(`manifest.page${index + 1}.pre`)}</div>
              <div className='slide__text-title'>{Localizer.localize(`manifest.page${index + 1}.title`)}</div>
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
          scroll={scrollCenter}
          smooth
          to={`/${language}/home#first-name`}>{Localizer.localize('agency.scroll')}</HashLink>
      </div>
    </div>
  );
};

export default Carousel;
