/* @flow */

import './Carousel.scss';
import * as React from 'react';
import {useCallback, useState} from 'react';
import Bullet from './Bullet';
import image0 from '../assets/image0.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

const IMAGES = [image0, image1, image2, image3, image4, image5];

const Carousel = (): React.Node => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBulletOnClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  return (
    <div className='carousel'>
      <img src={IMAGES[currentIndex]} />
      <div className='carousel__buttons'>{IMAGES.map((img, index) => <Bullet
        index={index}
        isSelected={index === currentIndex}
        key={img.toString()}
        onClick={handleBulletOnClick} />)}</div>
    </div>
  );
};

export default Carousel;
