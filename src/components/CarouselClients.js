/* @flow */

import './CarouselClients.scss';
import * as React from 'react';
import Carousel from './Carousel';
import {Localizer} from '../helpers/localizer';

export const IMAGE_COUNT = 6;

const renderSlideContent = (index: number): React.Element<any> | null => {
  if (index < IMAGE_COUNT - 1) {
    return null;
  }

  return (
    <div className='slide__text-content'>{Localizer.localize(`clients.page${index + 1}.text`)}</div>
  );
};

const CarouselClients = (): React.Node => (
  <Carousel
    className='clients'
    id='carousel-clients'
    imageCount={IMAGE_COUNT}
    logo
    scrollLink='carousel-manifest'
    slideContentRenderer={renderSlideContent} />
);

export default CarouselClients;
