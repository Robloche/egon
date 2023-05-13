/* @flow */

import './CarouselManifest.scss';
import * as React from 'react';
import Carousel from './Carousel';
import {Localizer} from '../helpers/localizer';
import egonLogo from '../assets/svg/logo-white.svg';

export const PAGE_COUNT = 5;

const renderSlideContent = (index: number): React.Element<any> => {
  if (index < PAGE_COUNT - 1) {
    return (
      <>
        <div className='slide__text-pre'>{Localizer.localize(`manifest.page${index + 1}.pre`)}</div>
        <div className='slide__text-title'>{Localizer.localize(`manifest.page${index + 1}.title`)}</div>
        <div className='slide__text-content'>{Localizer.localize(`manifest.page${index + 1}.text`)}</div>
      </>
    );
  }

  return (
    <>
      <img
        alt='Logo Egon Paris'
        className='slide__logo'
        src={egonLogo} />
      <div className='slide__text-content'>{Localizer.localize(`manifest.page${index + 1}.text`)}</div>
    </>
  );
};

const CarouselManifest = (): React.Node => (
  <Carousel
    className='manifest'
    id='carousel-manifest'
    pageCount={PAGE_COUNT}
    scrollLink='first-name'
    slideContentRenderer={renderSlideContent} />
);

export default CarouselManifest;
