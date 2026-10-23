/* @flow */

import './Project.scss';
import './ProjectChateauMontrose.scss';
import * as React from 'react';
import { useCallback, useState } from 'react';
import Bullet from './Bullet';
import LocalizedTrans from './LocalizedTrans';
import { Localizer } from '../helpers/localizer';
import chais1264 from '../assets/images/projects/chateau-montrose/chais_1264.png';
import chais1700 from '../assets/images/projects/chateau-montrose/chais_1700.png';
import chais400 from '../assets/images/projects/chateau-montrose/chais_400.png';
import chais800 from '../assets/images/projects/chateau-montrose/chais_800.png';
import chateau1264 from '../assets/images/projects/chateau-montrose/chateau_1264.png';
import chateau1700 from '../assets/images/projects/chateau-montrose/chateau_1700.png';
import chateau400 from '../assets/images/projects/chateau-montrose/chateau_400.png';
import chateau800 from '../assets/images/projects/chateau-montrose/chateau_800.png';
import chocolates1400 from '../assets/images/projects/chateau-montrose/chocolates1_400.png';
import chocolates2400 from '../assets/images/projects/chateau-montrose/chocolates2_400.png';
import chocolates3400 from '../assets/images/projects/chateau-montrose/chocolates3_400.png';
import clsx from 'clsx';
import iphone400 from '../assets/images/projects/chateau-montrose/iphone_400.png';
import iphone600 from '../assets/images/projects/chateau-montrose/iphone_600.png';
import mac400 from '../assets/images/projects/chateau-montrose/mac_400.png';
import mac600 from '../assets/images/projects/chateau-montrose/mac_600.png';
import map11400 from '../assets/images/projects/chateau-montrose/map1_1400.png';
import map1400 from '../assets/images/projects/chateau-montrose/map1_400.png';
import map1900 from '../assets/images/projects/chateau-montrose/map1_900.png';
import map21400 from '../assets/images/projects/chateau-montrose/map2_1400.png';
import map2400 from '../assets/images/projects/chateau-montrose/map2_400.png';
import map2900 from '../assets/images/projects/chateau-montrose/map2_900.png';
import map31400 from '../assets/images/projects/chateau-montrose/map3_1400.png';
import map3400 from '../assets/images/projects/chateau-montrose/map3_400.png';
import map3900 from '../assets/images/projects/chateau-montrose/map3_900.png';
import map41400 from '../assets/images/projects/chateau-montrose/map4_1400.png';
import map4400 from '../assets/images/projects/chateau-montrose/map4_400.png';
import map4900 from '../assets/images/projects/chateau-montrose/map4_900.png';
import map51400 from '../assets/images/projects/chateau-montrose/map5_1400.png';
import map5400 from '../assets/images/projects/chateau-montrose/map5_400.png';
import map5900 from '../assets/images/projects/chateau-montrose/map5_900.png';
import nature1400 from '../assets/images/projects/chateau-montrose/nature1_400.png';
import nature1600 from '../assets/images/projects/chateau-montrose/nature1_600.png';
import nature2400 from '../assets/images/projects/chateau-montrose/nature2_400.png';
import nature2600 from '../assets/images/projects/chateau-montrose/nature2_600.png';
import story1336 from '../assets/images/projects/chateau-montrose/story1_336.png';
import story2336 from '../assets/images/projects/chateau-montrose/story2_336.png';
import story3336 from '../assets/images/projects/chateau-montrose/story3_336.png';
import story4336 from '../assets/images/projects/chateau-montrose/story4_336.png';
import { useSelector } from 'react-redux';

const MAPS = [
  { key: 'map1', width1400: map11400, width400: map1400, width900: map1900 },
  { key: 'map2', width1400: map21400, width400: map2400, width900: map2900 },
  { key: 'map3', width1400: map31400, width400: map3400, width900: map3900 },
  { key: 'map4', width1400: map41400, width400: map4400, width900: map4900 },
  { key: 'map5', width1400: map51400, width400: map5400, width900: map5900 },
];

const renderHeader = () => (
  <div className='page-project__header'>
    <div className='project__introduction'>
      <div className='project__title'>{Localizer.localize('references.projects.chateau_montrose.title')}</div>
      <div
        className='project__description-huge'>{Localizer.localize('references.projects.chateau_montrose.subtitle')}</div>
      <div>{Localizer.localize('references.projects.chateau_montrose.introduction')}</div>
    </div>
  </div>
);

const renderStories = () => (
  <div className='project__four-shots'>
    <img
      alt=''
      sizes='336px'
      src={story1336}
      srcSet={`${story1336} 336w`} />
    <img
      alt=''
      sizes='336px'
      src={story2336}
      srcSet={`${story2336} 336w`} />
    <img
      alt=''
      sizes='336px'
      src={story3336}
      srcSet={`${story3336} 336w`} />
    <img
      alt=''
      sizes='336px'
      src={story4336}
      srcSet={`${story4336} 336w`} />
  </div>
);

const ProjectChateauMontrose = (): React.Node => {
  useSelector((state) => state.language);

  const [visibleMapIndex, setVisibleMapIndex] = useState(0);

  const handleMapBulletOnClick = useCallback((index: number) => {
    setVisibleMapIndex(index);
  }, []);

  return (
    <>
      {renderHeader()}
      <img
        alt=''
        className='project__image-full-width'
        sizes='(max-width: 400px) 400px, (max-width: 900px) 800px, (max-width: 1400px) 1264px, 1700px'
        src={chais1700}
        srcSet={`${chais400} 400w, ${chais800} 800w, ${chais1264} 1264w, ${chais1700} 1700w`} />
      <div className='project__stories'>
        <div className='stories__title'>{Localizer.localize('references.projects.chateau_montrose.our_missions')}</div>
        <div>{Localizer.localize('references.projects.chateau_montrose.paragraph1')}</div>
      </div>
      {renderStories()}
      <div className='project__stories centered'>
        <div>{Localizer.localize('references.projects.chateau_montrose.paragraph2')}</div>
        <div>{Localizer.localize('references.projects.chateau_montrose.paragraph3')}</div>
      </div>
      <div className='project__carousel-wrapper'>
        <div className='project__carousel'>{MAPS.map(({ key, width1400, width400, width900 }, i) => (
          <img
            alt=''
            className={clsx('project__carousel-image', visibleMapIndex === i && 'visible')}
            key={key}
            sizes='(max-width: 600px) 400px, (max-width: 1200px) 900px, 1400px'
            src={width1400}
            srcSet={`${width400} 400w, ${width900} 900w, ${width1400} 1400w`} />
        ))}
        </div>
        <div className='project__bullets'>{
          MAPS.map(({ key }, index) => <Bullet
            index={index}
            isFull={index === visibleMapIndex}
            isLight={false}
            key={`map-bullet-${key}`}
            onClick={handleMapBulletOnClick} />)
        }</div>
      </div>
      <div className='project__new-website'>
        <div className='new-website__title'>{Localizer.localize('references.projects.chateau_montrose.new_website1')}</div>
        <div className='new-website__subtitle'>{Localizer.localize('references.projects.chateau_montrose.new_website2')}</div>
      </div>
      <div className='project__screens-wrapper'>
        <img
          alt=''
          className='project__image-two-third'
          sizes='(max-width: 600px) 400px, 600px'
          src={mac600}
          srcSet={`${mac400} 400w, ${mac600} 600w`} />
        <img
          alt=''
          sizes='(max-width: 600px) 400px, 600px'
          src={iphone600}
          srcSet={`${iphone400} 400w, ${iphone600} 600w`} />
      </div>
      <div
        className='project__last-paragraph'>
        <LocalizedTrans keyName='references.projects.chateau_montrose.paragraph4' />
      </div>
      <div className='project__screens-wrapper'>
        <img
          alt=''
          sizes='(max-width: 600px) 400px, 600px'
          src={nature1600}
          srcSet={`${nature1400} 400w, ${nature1600} 600w`} />
        <img
          alt=''
          sizes='(max-width: 600px) 400px, 600px'
          src={nature2600}
          srcSet={`${nature2400} 400w, ${nature2600} 600w`} />
      </div>
      <div className='project__screens-wrapper'>
        <img
          alt=''
          sizes='400px'
          src={chocolates1400}
          srcSet={`${chocolates1400} 400w`} />
        <img
          alt=''
          sizes='400px'
          src={chocolates2400}
          srcSet={`${chocolates2400} 400w`} />
        <img
          alt=''
          sizes='400px'
          src={chocolates3400}
          srcSet={`${chocolates3400} 400w`} />
      </div>
      {/* eslint-disable no-magic-numbers */}
      <div className='project__credits'>{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <span key={i}>{Localizer.localize(`references.projects.chateau_montrose.credits${i}`)}</span>
      ))}</div>
      {/* eslint-enable no-magic-numbers */}
      <img
        alt=''
        className='project__image-full-width last'
        sizes='(max-width: 400px) 400px, (max-width: 900px) 800px, (max-width: 1400px) 1264px, 1700px'
        src={chateau1700}
        srcSet={`${chateau400} 400w, ${chateau800} 800w, ${chateau1264} 1264w, ${chateau1700} 1700w`} />
    </>
  );
};

export default ProjectChateauMontrose;
