/* @flow */

import './CarouselClients.scss';
import * as React from 'react';
import Carousel from './Carousel';

export const PAGE_COUNT = 5;

const CarouselClients = (): React.Node => (
  <Carousel
    className='clients'
    id='carousel-clients'
    logo
    pageCount={PAGE_COUNT}
    scrollLink='carousel-manifest' />
);

export default CarouselClients;
