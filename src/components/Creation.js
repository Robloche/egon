/* @flow */

import './Creation.scss';
import * as React from 'react';
import AnimatedText from './AnimatedText';
import Footer from './Footer';
import Header from './Header';
import { Localizer } from '../helpers/localizer';
import creationFace1400 from '../assets/images/creation/creation1_1400.png';
import creationFace1920 from '../assets/images/creation/creation1_1920.png';
import creationFace400 from '../assets/images/creation/creation1_400.png';
import creationFace900 from '../assets/images/creation/creation1_900.png';
import creationGarden1400 from '../assets/images/creation/creation2_1400.png';
import creationGarden1920 from '../assets/images/creation/creation2_1920.png';
import creationGarden400 from '../assets/images/creation/creation2_400.png';
import creationGarden900 from '../assets/images/creation/creation2_900.png';

const renderSectionIntroduction = () => (
  <>
    <div
      className='page-creation__section section__left section__introduction'
      id='introduction'>
      <div className='side-title'>{Localizer.localize('creation.introduction.side_title')}</div>
    </div>
    <div className='page-creation__section section_center section__introduction'>
      <div
        className='page-creation__paragraph title title__introduction'>{Localizer.localize('creation.introduction.title')}</div>
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

const Creation = (): React.Node => (
  <div
    className='page page-creation'
    id='top'>
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
    </div>
    <Footer />
  </div>
);

export default Creation;
