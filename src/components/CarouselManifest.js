/* @flow */

import './CarouselManifest.scss';
import * as React from 'react';
import Carousel from './Carousel';
import { Localizer } from '../helpers/localizer';
import egonLogo from '../assets/svg/logo-white.svg';

export const PAGE_COUNT = 5;

const renderSlideContent = (index: number): React.Node => {
  if (index === 0 || index >= PAGE_COUNT) {
    // First slide
    return (
      <>
        <img
          alt='Logo Egon Paris'
          className='slide__logo'
          src={egonLogo} />
        <div className='slide__text-content'>{Localizer.localize(`manifest.page${index}.text`)}</div>
      </>
    );
  }

  // Other slides
  return (
    <>
      <div className='slide__text-pre'>{Localizer.localize(`manifest.page${index}.pre`)}</div>
      <div className='slide__text-title'>{Localizer.localize(`manifest.page${index}.title`)}</div>
      <div className='slide__text-content'>{Localizer.localize(`manifest.page${index}.text`)}</div>
    </>
  );
};

const CarouselManifest = (): React.Node => (
  <Carousel
    className='manifest'
    id='carousel-manifest'
    menu
    pageCount={PAGE_COUNT}
    scrollLink='carousel-clients'
    slideContentRenderer={renderSlideContent} />
);

export default CarouselManifest;
