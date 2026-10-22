/* @flow */

import './References.scss';
import * as React from 'react';
import AnimatedText from './AnimatedText';
import Footer from './Footer';
import { HashLink } from 'react-router-hash-link';
import Header from './Header';
import { Localizer } from '../helpers/localizer';
import clsx from 'clsx';
import projectChateauMontrose168 from '../assets/images/projects/chateau-montrose/intro_168.png';
import projectChateauMontrose384 from '../assets/images/projects/chateau-montrose/intro_384.png';
import projectChateauMontrose600 from '../assets/images/projects/chateau-montrose/intro_600.png';
import projectChateauMontrose848 from '../assets/images/projects/chateau-montrose/intro_848.png';
import projectMoet168 from '../assets/images/projects/moet/label_168.png';
import projectMoet384 from '../assets/images/projects/moet/label_384.png';
import projectMoet600 from '../assets/images/projects/moet/label_600.png';
import projectMoet848 from '../assets/images/projects/moet/label_848.png';
import projectRelaisChateaux from '../assets/videos/projects/relais-et-chateaux/video_1920_1080.mp4';
import { useSelector } from 'react-redux';

/* eslint-disable react/require-default-props */
type ProjectDataType = {|
  +isReversed?: boolean,
  +language: string,
  +name: string,
  +images?: Array<string>,
  +imageAltText?: string,
  +video?: string,
|};
/* eslint-enable react/require-default-props */

const renderProject = ({
  images = [],
  imageAltText,
  isReversed = false,
  language,
  name,
  video
}: ProjectDataType): React.Node => {
  const [imageXXS, imageXS, imageS, image] = images;

  const illustrationElt = video ?
    <video
      autoPlay
      loop
      muted
      playsInline
      preload='auto'
      src={video} />
    :
    <img
      alt={imageAltText}
      sizes='(max-width: 800px) 168px, (max-width: 1100px) 384px, (max-width: 1400px) 600px, 848px'
      src={image}
      srcSet={`${imageXXS} 168w, ${imageXS} 384w, ${imageS} 600w, ${image} 848w`} />;

  return (
    <div className={clsx('page-references__project', isReversed && 'reversed')}>
      {illustrationElt}
      <div className='page-references__project-content'>
        <div className='project__title'>{Localizer.localize(`references.projects.${name}.title`)}</div>
        <div className='project__subtitle'>{Localizer.localize(`references.projects.${name}.subtitle`)}</div>
        <div className='project__description'>
          {Localizer.localize(`references.projects.${name}.description1`)}
          <br />
          {Localizer.localize(`references.projects.${name}.description2`)}
        </div>
        <HashLink
          className='underlined'
          to={`/${language}/projects/${name}#top`}>{Localizer.localize('references.projects.more')}</HashLink>
      </div>
    </div>
  );
};

const renderSectionProjects = (language: string) => (
  <div className='page-references__section'>
    {/* Egon x Château Montrose */}
    {renderProject({
      imageAltText: '',
      images: [projectChateauMontrose168, projectChateauMontrose384, projectChateauMontrose600, projectChateauMontrose848],
      isReversed: true,
      language,
      name: 'chateau_montrose'
    })}
    {/* Egon x Moët & Chandon */}
    {renderProject({
      imageAltText: 'Étiquette de bouteille de champagne Moët & Chandon Grand Vintage 2015',
      images: [projectMoet168, projectMoet384, projectMoet600, projectMoet848],
      language,
      name: 'moet'
    })}
    {/* Egon x Relais & Châteaux */}
    {renderProject({
      isReversed: true,
      language,
      name: 'relais_chateaux',
      video: projectRelaisChateaux
    })}
  </div>
);

const References = (): React.Node => {
  const language = useSelector((state) => state.language);

  return (
    <div
      className='page page-references'
      id='top'>
      <Header />
      <div className='page-references__container'>
        {renderSectionProjects(language)}
        <div className='page-references__closing'>
          <AnimatedText
            classList='title verbatim'
            direction='up'
            stringKey='references.projects.closing' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default References;
