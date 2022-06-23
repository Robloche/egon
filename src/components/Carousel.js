/* @flow */

import './Carousel.scss';
import * as React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

const IMAGES = [image1, image2, image3, image4, image5, image6];

const Carousel = (): React.Node => (
  <div className='carousel'>
    <img src={image1} />
    <div className='carousel__buttons'>o o o o</div>
  </div>
);

export default Carousel;
