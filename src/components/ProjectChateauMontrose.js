/* @flow */

import './Project.scss';
import './ProjectChateauMontrose.scss';
import * as React from 'react';
import { Localizer } from '../helpers/localizer';
import chais1264 from '../assets/images/projects/chateau-montrose/chais_1264.png';
import chais1700 from '../assets/images/projects/chateau-montrose/chais_1700.png';
import chais400 from '../assets/images/projects/chateau-montrose/chais_400.png';
import chais800 from '../assets/images/projects/chateau-montrose/chais_800.png';
import map1400 from '../assets/images/projects/chateau-montrose/map_1400.png';
import map400 from '../assets/images/projects/chateau-montrose/map_400.png';
import map900 from '../assets/images/projects/chateau-montrose/map_900.png';
import story1336 from '../assets/images/projects/chateau-montrose/story1_336.png';
import story2336 from '../assets/images/projects/chateau-montrose/story2_336.png';
import story3336 from '../assets/images/projects/chateau-montrose/story3_336.png';
import story4336 from '../assets/images/projects/chateau-montrose/story4_336.png';
import { useSelector } from 'react-redux';

const renderHeader = () => (
  <div className='page-project__header'>
    <div className='project__introduction'>
      <div className='project__title'>{Localizer.localize('references.projects.chateau_montrose.title')}</div>
      <div className='project__subtitle'>{Localizer.localize('references.projects.chateau_montrose.subtitle')}</div>
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
        <div>{Localizer.localize('references.projects.chateau_montrose.new_website1')}</div>
        <div>{Localizer.localize('references.projects.chateau_montrose.new_website2')}</div>
      </div>
      <div>{Localizer.localize('references.projects.chateau_montrose.paragraph4')}</div>
      <div>{Localizer.localize('references.projects.chateau_montrose.credits')}</div>
    </>
  );
};

export default ProjectChateauMontrose;
