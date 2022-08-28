/* @flow */

import './Creation.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import creation1400 from '../assets/images/creation_1400.png';
import creation1920 from '../assets/images/creation_1920.png';
import creation400 from '../assets/images/creation_400.png';
import creation900 from '../assets/images/creation_900.png';
import {useSelector} from 'react-redux';

const renderSectionProjects = () => (
  <>
    <div className='page-creation__section section__left'>
      <div className='side-title'>{Localizer.localize('creation.projects.side_title')}</div>
    </div>
    <div
      className='page-creation__section section_center'
      id='projects'>
      <div className='page-creation__paragraph title'>{Localizer.localize('creation.projects.title')}</div>
      <div className='page-creation__paragraph'>{Localizer.localize('creation.projects.paragraph')}</div>
      <div className='page-creation__contact'>
        <div>{Localizer.localize('creation.projects.contact')}</div>
        <a
          href='mailto:egon@egonparis.com'
          rel='noopener noreferrer'
          target='_blank'>egon@egonparis.com</a>
      </div>
    </div>
  </>
);

const renderSectionCustomers = () => (
  <>
    <div className='page-creation__section section__left section__customers'>
      <div className='side-title'>{Localizer.localize('creation.customers.side_title')}</div>
    </div>
    <div
      className='page-creation__section section_center section__customers'
      id='customers'>
      <div className='page-creation__paragraph title'>{Localizer.localize('creation.customers.title')}</div>
      <div className='page-creation__paragraph'>{Localizer.localize('creation.customers.paragraph')}</div>
      <div className='page-creation__paragraph huge'>{Localizer.localize('creation.customers.thanks')}</div>
    </div>
    <div className='page-creation__section section__right section__customers' />
  </>
);

const Creation = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <div className='page page-creation'>
      <Header />
      <div className='page-creation__container'>
        {renderSectionProjects()}
        <img
          alt='Dessin'
          sizes='(max-width: 400px) 400px, (max-width: 900px) 900px, (max-width: 1400px) 1400px, 1920px'
          src={creation1920}
          srcSet={`${creation400} 400px, ${creation900} 900w, ${creation1400} 1400w, ${creation1920} 1920w`} />
        {renderSectionCustomers()}
      </div>
      <Footer />
    </div>
  );
};

export default Creation;
