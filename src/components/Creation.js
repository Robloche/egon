/* @flow */

import './Creation.scss';
import * as React from 'react';
import AnimatedText from './AnimatedText';
import Footer from './Footer';
import {HashLink} from 'react-router-hash-link';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import creationFace1400 from '../assets/images/creation/creation1_1400.png';
import creationFace1920 from '../assets/images/creation/creation1_1920.png';
import creationFace400 from '../assets/images/creation/creation1_400.png';
import creationFace900 from '../assets/images/creation/creation1_900.png';
import creationGarden1400 from '../assets/images/creation/creation2_1400.png';
import creationGarden1920 from '../assets/images/creation/creation2_1920.png';
import creationGarden400 from '../assets/images/creation/creation2_400.png';
import creationGarden900 from '../assets/images/creation/creation2_900.png';
/*
 * Import projectCondesa168 from '../assets/images/project_condesa_168.png';
 * import projectCondesa384 from '../assets/images/project_condesa_384.png';
 * import projectCondesa600 from '../assets/images/project_condesa_600.png';
 * import projectCondesa848 from '../assets/images/project_condesa_848.png';
 */
import projectMoet168 from '../assets/images/projects/moet/label_168.png';
import projectMoet384 from '../assets/images/projects/moet/label_384.png';
import projectMoet600 from '../assets/images/projects/moet/label_600.png';
import projectMoet848 from '../assets/images/projects/moet/label_848.png';
/*
 * Import projectRothschild168 from '../assets/images/project_rothschild_168.png';
 * import projectRothschild384 from '../assets/images/project_rothschild_384.png';
 * import projectRothschild600 from '../assets/images/project_rothschild_600.png';
 * import projectRothschild848 from '../assets/images/project_rothschild_848.png';
 */
import {useSelector} from 'react-redux';

const renderProject = (language: string,
  name: string,
  images: Array<string>,
  imageAltText: string,
  isReversed: boolean = false) => {
  const [imageXXS, imageXS, imageS, image] = images;

  return (
    <div className={`page-creation__project ${isReversed ? 'reversed' : ''}`}>
      <img
        alt={imageAltText}
        sizes='(max-width: 400px) 168px, (max-width: 900px) 384px, (max-width: 1400px) 600px, 848px'
        src={image}
        srcSet={`${imageXXS} 168w, ${imageXS} 384w, ${imageS} 600w, ${image} 848w`} />
      <div className='page-creation__project-content'>
        <div className='project__title'>{Localizer.localize(`creation.projects.${name}.title`)}</div>
        <div className='project__subtitle'>{Localizer.localize(`creation.projects.${name}.subtitle`)}</div>
        <div className='project__description'>
          {Localizer.localize(`creation.projects.${name}.description1`)}
          <br />
          {Localizer.localize(`creation.projects.${name}.description2`)}
        </div>
        <HashLink
          className='underlined'
          to={`/${language}/projects/${name}#top`}>{Localizer.localize('creation.projects.more')}</HashLink>
      </div>
    </div>
  );
};

const renderSectionProjects = (language: string) => (
  <div className='page-creation__section section_project'>
    <div
      className='page-creation__section section__left'
      id='projects'>
      <div className='side-title'>{Localizer.localize('creation.projects.side_title')}</div>
    </div>
    <div className='page-creation__section'>
      {/* Egon x Moët & Chandon */}
      {renderProject(language, 'moet', [projectMoet168, projectMoet384, projectMoet600, projectMoet848], 'Étiquette de bouteille de champagne Moët & Chandon Grand Vintage 2015')}
      {/* Egon x La Condesa */}
      {renderProject(language, 'moet', [projectMoet168, projectMoet384, projectMoet600, projectMoet848], 'Étiquette de bouteille de champagne Moët & Chandon Grand Vintage 2015', true)}
      {renderProject(language, 'moet', [projectMoet168, projectMoet384, projectMoet600, projectMoet848], 'Étiquette de bouteille de champagne Moët & Chandon Grand Vintage 2015')}
      {/*{renderProject(language,'condesa', [projectCondesa168, projectCondesa384, projectCondesa600, projectCondesa848], 'Carte de visite de La Condesa posée sur des couverts', true)}*/}
      {/* Egon x Baron de Rothschild Champagne */}
      {/*{renderProject(language,'condesa', [projectRothschild168, projectRothschild384, projectRothschild600, projectRothschild848], 'Étiquette de bouteille de champagne Barons de Rothschild Concordia brut')}*/}
    </div>
  </div>
);

const renderSectionIntroduction = () => (
  <>
    <div
      className='page-creation__section section__left section__introduction'
      id='introduction'>
      <div className='side-title'>{Localizer.localize('creation.introduction.side_title')}</div>
    </div>
    <div className='page-creation__section section_center section__introduction'>
      <div className='page-creation__paragraph title title__introduction'>{Localizer.localize('creation.introduction.title')}</div>
      <div className='page-creation__paragraph'>{Localizer.localize('creation.introduction.paragraph1')}</div>
      <div className='page-creation__paragraph'>{Localizer.localize('creation.introduction.paragraph2')}</div>
      <div className='page-creation__contact'>
        <div>{Localizer.localize('creation.introduction.contact')}</div>
        <a
          href='mailto:egon@egonparis.com'
          rel='noopener noreferrer'
          target='_blank'>egon@egonparis.com</a>
      </div>
    </div>
    <div className='page-creation__section section__right' />
  </>
);

const renderSectionCustomers = () => (
  <>
    <div
      className='page-creation__section section__left section__customers'
      id='customers'>
      <div className='side-title'>{Localizer.localize('creation.customers.side_title')}</div>
    </div>
    <div className='page-creation__section section_center section__customers'>
      <div className='page-creation__paragraph title'>{Localizer.localize('creation.customers.title')}</div>
      <div className='page-creation__paragraph'>{Localizer.localize('creation.customers.paragraph1')}</div>
      <div className='page-creation__paragraph'>
        <span>{Localizer.localize('creation.customers.paragraph2-part1')}</span>
        <a
          href='https://www.instagram.com/egon.paris/'
          rel='noopener noreferrer'
          target='_blank'>egon.paris</a>
        <span>{Localizer.localize('creation.customers.paragraph2-part2')}</span>
        <a
          href='https://www.linkedin.com/company/egon-paris/'
          rel='noopener noreferrer'
          target='_blank'>Egon Paris
        </a>
      </div>
      <AnimatedText
        classList='page-creation__paragraph huge'
        direction='down'
        stringKey='creation.customers.thanks' />
    </div>
    <div className='page-creation__section section__right section__customers' />
  </>
);

const Creation = (): React.Node => {
  const language = useSelector((state) => state.language);

  return (<div className='page page-creation'>
    <Header />
    <div className='page-creation__container'>
      {renderSectionIntroduction()}
      <img
        alt='Illustration de visage'
        sizes='(max-width: 400px) 400px, (max-width: 900px) 900px, (max-width: 1400px) 1400px, 1920px'
        src={creationFace1920}
        srcSet={`${creationFace400} 400w, ${creationFace900} 900w, ${creationFace1400} 1400w, ${creationFace1920} 1920w`} />
      {renderSectionCustomers()}
      <img
        alt='Illustration de jardin imaginaire - Carte de vœux Egon 2024'
        sizes='(max-width: 400px) 400px, (max-width: 900px) 900px, (max-width: 1400px) 1400px, 1920px'
        src={creationGarden1920}
        srcSet={`${creationGarden400} 400w, ${creationGarden900} 900w, ${creationGarden1400} 1400w, ${creationGarden1920} 1920w`} />
      {renderSectionProjects(language)}
      <div className='page-creation__closing'>
        <AnimatedText
          classList='title verbatim'
          direction='up'
          stringKey='creation.projects.closing' />
      </div>
    </div>
    <Footer />
  </div>);
};

export default Creation;
