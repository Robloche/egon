/* @flow */

import './CarouselClients.scss';
import * as React from 'react';
import Carousel from './Carousel';
import {Localizer} from '../helpers/localizer';

export const PAGE_COUNT = 6;

const renderSlideContent = (index: number): React.Element<any> | null => {
  if (index < PAGE_COUNT - 1) {
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
    logo
    pageCount={PAGE_COUNT}
    scrollLink='carousel-manifest'
    slideContentRenderer={renderSlideContent} />
);

export default CarouselClients;
