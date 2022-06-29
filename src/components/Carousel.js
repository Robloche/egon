/* @flow */

import './Carousel.scss';
import * as React from 'react';
import {useCallback, useEffect, useRef, useState} from 'react';
import Bullet from './Bullet';
import image0 from '../assets/image0.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

// Image changes every 5s //5000;
const IMAGE_SWITCH_TIMEOUT = 1000;

const IMAGES = [image0, image1, image2, image3, image4, image5];

// eslint-disable-next-line no-unused-vars
const nextIndex = (index) => (index + 1) % IMAGES.length;

const Carousel = (): React.Node => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageSwitchTimer = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const startTimer = useCallback((index) => {
    imageSwitchTimer.current = setTimeout(() => {
      // StartTransition(nextIndex(index));
    }, IMAGE_SWITCH_TIMEOUT);
  }, []);

  // DEBUG: FIX that so timer is only launched once (well, since there's a cleanup, it might be...)
  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    // StartTimer(0);
    return () => {
      clearTimeout(imageSwitchTimer.current);
    };
  }, [startTimer]);

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
            <div className='slide__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum felis dictum vulputate rutrum. Fusce feugiat, arcu eget blandit imperdiet, ligula dui
              bibendum ligula, a rhoncus tellus elit lacinia tortor.
            </div>
          </div>
        ))}
      </div>
      <div className='carousel__buttons'>{IMAGES.map((img, index) => <Bullet
        index={index}
        isSelected={index === currentIndex}
        key={img.toString()}
        onClick={handleBulletOnClick} />)}</div>
    </div>
  );
};

export default Carousel;
