/* @flow */

import './Project.scss';
import * as React from 'react';
import {Localizer} from '../helpers/localizer';
import fullWidthLabel1288 from '../assets/images/projects/moet/full-width-label_1288.png';
import fullWidthLabel1768 from '../assets/images/projects/moet/full-width-label_1768.png';
import fullWidthLabel368 from '../assets/images/projects/moet/full-width-label_368.png';
import fullWidthLabel832 from '../assets/images/projects/moet/full-width-label_832.png';
import making1Of296 from '../assets/images/projects/moet/making-of1_296.png';
import making2Of296 from '../assets/images/projects/moet/making-of2_296.png';
import making3Of296 from '../assets/images/projects/moet/making-of3_296.png';
import making4Of296 from '../assets/images/projects/moet/making-of4_296.png';
import making5Of296 from '../assets/images/projects/moet/making-of5_296.png';
import {useSelector} from 'react-redux';
import vintage1999Cropped960 from '../assets/images/projects/moet/vintage-1999-cropped_960.png';
import vintage1999L336 from '../assets/images/projects/moet/vintage-1999_336.png';
import vintage2006L336 from '../assets/images/projects/moet/vintage-2006_336.png';
import vintage2015L336 from '../assets/images/projects/moet/vintage-2015_336.png';
import vintage2015RoseL336 from '../assets/images/projects/moet/vintage-2015-rose_336.png';

const renderHeader = () => (
  <div className='page-project__header'>
    <div className='project__bullets'>
      <div>{Localizer.localize('creation.projects.moet.bullet1')}</div>
      <div>{Localizer.localize('creation.projects.moet.bullet2')}</div>
      <div>{Localizer.localize('creation.projects.moet.bullet3')}</div>
    </div>
    <div className='project__introduction'>
      <div className='project__title'>{Localizer.localize('creation.projects.moet.title')}</div>
      <div className='project__description-huge'>{Localizer.localize('creation.projects.moet.description1')}</div>
      <div>{Localizer.localize('creation.projects.moet.description2')}</div>
    </div>
  </div>
);

const renderStake = () => (
  <div className='project__stake'>
    <div className='project__stake-title'>{Localizer.localize('creation.projects.moet.stake_title')}</div>
    <div>{Localizer.localize('creation.projects.moet.stake_description')}</div>
  </div>
);

const renderShots = () => (
  <div className='project__four-shots'>
    <img
      alt=''
      sizes='336px'
      src={vintage2015L336}
      srcSet={`${vintage2015L336} 336w`} />
    <img
      alt=''
      sizes='336px'
      src={vintage2015RoseL336}
      srcSet={`${vintage2015RoseL336} 336w`} />
    <img
      alt=''
      sizes='336px'
      src={vintage2006L336}
      srcSet={`${vintage2006L336} 336w`} />
    <img
      alt=''
      sizes='336px'
      src={vintage1999L336}
      srcSet={`${vintage1999L336} 336w`} />
  </div>
);

const renderVintages = () => (
  <div className='project__vintages-presentation'>
    <img
      alt=''
      sizes='960px'
      src={vintage1999Cropped960}
      srcSet={`${vintage1999Cropped960} 960w`} />
    <div className='project__vintages-list'>
      <div className='project__vintages-year'>2015</div>
      <div>{Localizer.localize('creation.projects.moet.vintage_2015')}</div>
      <div className='project__vintages-year'>2015 Rosé</div>
      <div>{Localizer.localize('creation.projects.moet.vintage_2015_rose')}</div>
      <div className='project__vintages-year'>1999</div>
      <div>{Localizer.localize('creation.projects.moet.vintage_1999')}</div>
      <div className='project__vintages-year'>2006</div>
      <div>{Localizer.localize('creation.projects.moet.vintage_2006')}</div>
    </div>
  </div>
);

const renderScreens = () => (
  <div className='project__screens'>
    {/*<img*/}
    {/*  Alt=''*/}
    {/*  ClassName='project__screens-computer'*/}
    {/*  Sizes='960px'*/}
    {/*  Src={vintage1999Cropped960}*/}
    {/*  SrcSet={`${vintage1999Cropped960} 960w`} />*/}
    <img
      alt=''
      className='project__screens-computer'
      sizes='960px'
      src=''
      srcSet='' />
    <div className='project__screens-phones' />
  </div>
);

const renderEnd = () => (
  <div className='project__end'>
    <div className='project__thanks'>{Localizer.localize('creation.projects.common.thanks')}</div>
    <div className='project__cast'>
      <span>{Localizer.localize('creation.projects.common.client')} @Moët</span>
      <span>{Localizer.localize('creation.projects.common.photographer')} @Stan.desjeux</span>
      <span>{Localizer.localize('creation.projects.common.styling')} @charlene.viseux</span>
      <span>{Localizer.localize('creation.projects.common.post_production')} @Paul Pomorski</span>
    </div>
    <a
      className='project__contact'
      href='mailto:egon@egonparis.com'
      rel='noopener noreferrer'
      target='_blank'>{Localizer.localize('creation.projects.common.contact_us')}</a>
  </div>
);

const renderMakingOf = () => (
  <div className='project__making-of'>
    <img
      alt=''
      sizes='296px'
      src={making1Of296}
      srcSet={`${making1Of296} 296w`} />
    <img
      alt=''
      sizes='296px'
      src={making2Of296}
      srcSet={`${making2Of296} 296w`} />
    <img
      alt=''
      sizes='296px'
      src={making3Of296}
      srcSet={`${making3Of296} 296w`} />
    <img
      alt=''
      sizes='296px'
      src={making4Of296}
      srcSet={`${making4Of296} 296w`} />
    <img
      alt=''
      sizes='296px'
      src={making5Of296}
      srcSet={`${making5Of296} 296w`} />
  </div>
);

const ProjectMoet = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <>
      {renderHeader()}
      <img
        alt=''
        className='project__image-full-width'
        sizes='(max-width: 400px) 368px, (max-width: 900px) 832px, (max-width: 1400px) 1288px, 1768px'
        src={fullWidthLabel1768}
        srcSet={`${fullWidthLabel368} 368w, ${fullWidthLabel832} 832w, ${fullWidthLabel1288} 1288w, ${fullWidthLabel1768} 1768w`} />
      {renderStake()}
      {renderShots()}
      {renderVintages()}
      {renderScreens()}
      {renderEnd()}
      {renderMakingOf()}
    </>
  );
};

export default ProjectMoet;
