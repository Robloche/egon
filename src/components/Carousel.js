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

const nextIndex = (index) => (index + 1) % IMAGES.length;

const Carousel = (): React.Node => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(null);

  const imageSwitchTimer = useRef(null);

  const startTransition = useCallback((newIndex) => {
    // eslint-disable-next-line no-console
    console.log(`[startTransition] currentIndex: ${currentIndex} | newIndex: ${newIndex}`);
    setTransition({
      direction: newIndex - currentIndex,
      newIndex
    });
  }, [currentIndex, setTransition]);

  const startTimer = useCallback((index) => {
    imageSwitchTimer.current = setTimeout(() => {
      startTransition(nextIndex(index));
    }, IMAGE_SWITCH_TIMEOUT);
  }, [startTransition]);

  // DEBUG: FIX that so timer is only launched once (well, since there's a cleanup, it might be...)
  useEffect(() => {
    startTimer(0);
    return () => {
      clearTimeout(imageSwitchTimer.current);
    };
  }, [startTimer]);

  const handleBulletOnClick = useCallback((index) => {
    if (index === currentIndex) {
      return;
    }

    clearTimeout(imageSwitchTimer.current);
    startTransition(index);
  }, [currentIndex, startTransition]);

  const handleOnAnimationEnd = useCallback((event) => {
    const {animationName, target} = event;

    if (animationName.startsWith('slide-in-from-')) {
      const index = Number(target.getAttribute('data-index'));
      // Console.log(`[handleOnAnimationEnd] currentIndex: ${index}`);
      setTransition(null);
      setCurrentIndex(index);
      startTimer(index);
    }
  }, [startTimer]);

  // Console.log(`[render] currentIndex: ${currentIndex} | newIndex: ${newIndex} | transition: ${transition}`);

  const getSlideClass = (index) => {
    if (transition === null) {
      // Static slide
      return index === currentIndex ? 'visible' : '';
    }

    const {direction, newIndex} = transition;

    // Animation is happening
    if (index === currentIndex) {
      // Slide is disappearing
      return `slide-out-to-${direction > 0 ? 'left' : 'right'}`;
    }
    if (index === newIndex) {
      // Slide is appearing
      return `slide-in-from-${direction > 0 ? 'right' : 'left'}`;
    }
    // Slide is neither appearing nor disappearing
    return '';
  };

  const renderImage = (index) => {
    if (typeof index === 'undefined') {
      return null;
    }

    const img = IMAGES[index];

    return (
      <img
        className={`carousel__slide ${getSlideClass(index)}`}
        data-index={index}
        onAnimationEnd={handleOnAnimationEnd}
        src={img} />
    );
  };

  /*
   * DEBUG
   * {IMAGES.map((img, index) => (
   * index !== currentIndex && index !== newIndex ? null
   * : <img
   * className={`carousel__slide ${getSlideClass(index)}`}
   * data-index={index}
   * key={img.toString()}
   * onAnimationEnd={handleOnAnimationEnd}
   * src={img} />
   * ))}
   */

  return (
    <div className='carousel'>
      {renderImage(currentIndex)}
      {renderImage(transition?.newIndex)}
      <div className='carousel__buttons'>{IMAGES.map((img, index) => <Bullet
        index={index}
        isSelected={index === currentIndex}
        key={img.toString()}
        onClick={handleBulletOnClick} />)}</div>
    </div>
  );
};

export default Carousel;
