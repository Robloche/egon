/* @flow */

import './Project.scss';
import './ProjectChateauMontrose.scss';
import * as React from 'react';
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
import iphone400 from '../assets/images/projects/chateau-montrose/iphone_400.png';
import iphone600 from '../assets/images/projects/chateau-montrose/iphone_600.png';
import mac400 from '../assets/images/projects/chateau-montrose/mac_400.png';
import mac600 from '../assets/images/projects/chateau-montrose/mac_600.png';
import map1400 from '../assets/images/projects/chateau-montrose/map_1400.png';
import map400 from '../assets/images/projects/chateau-montrose/map_400.png';
import map900 from '../assets/images/projects/chateau-montrose/map_900.png';
import nature1400 from '../assets/images/projects/chateau-montrose/nature1_400.png';
import nature1600 from '../assets/images/projects/chateau-montrose/nature1_600.png';
import nature2400 from '../assets/images/projects/chateau-montrose/nature2_400.png';
import nature2600 from '../assets/images/projects/chateau-montrose/nature2_600.png';
import story1336 from '../assets/images/projects/chateau-montrose/story1_336.png';
import story2336 from '../assets/images/projects/chateau-montrose/story2_336.png';
import story3336 from '../assets/images/projects/chateau-montrose/story3_336.png';
import story4336 from '../assets/images/projects/chateau-montrose/story4_336.png';
import { useSelector } from 'react-redux';

const renderHeader = () => (
  <div className='page-project__header'>
    <div className='project__introduction'>
      <div className='project__title'>{Localizer.localize('references.projects.chateau_montrose.title')}</div>
      <div className='project__description-huge'>{Localizer.localize('references.projects.chateau_montrose.subtitle')}</div>
      <div>{Localizer.localize('references.projects.chateau_montrose.description1')}</div>
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
        <div>{Localizer.localize('references.projects.chateau_montrose.paragraph1')}</div>
      </div>
      {renderStories()}
      <div className='project__stories centered'>
        <div>{Localizer.localize('references.projects.chateau_montrose.paragraph3')}</div>
        <div>{Localizer.localize('references.projects.chateau_montrose.paragraph2')}</div>
      </div>
      <img
        alt=''
        className='project__image-full-width'
        sizes='(max-width: 600px) 400px, (max-width: 1200px) 900px, 1400px'
        src={map1400}
        srcSet={`${map400} 400w, ${map900} 900w, ${map1400} 1400w`} />
      <div className='project__new-website'>
        <div className='title'>{Localizer.localize('references.projects.chateau_montrose.new_website1')}</div>
        <div>{Localizer.localize('references.projects.chateau_montrose.new_website2')}</div>
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
        className='project__last-paragraph'>{Localizer.localize('references.projects.chateau_montrose.paragraph4')}</div>
      <div className='project__screens-wrapper nature'>
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
      <div className='project__screens-wrapper chocolates'>
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
      <div className='project__credits'>{Localizer.localize('references.projects.chateau_montrose.credits')}</div>
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
