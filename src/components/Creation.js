/* @flow */

import './Creation.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import creation from '../assets/images/creation_1920.png';
import {useSelector} from 'react-redux';

const renderSectionProjects = () => (
  <>
    <div className='page-creation__section section__left'>
      <div className='side-title'>{Localizer.localize('creation.projects.side_title')}</div>
    </div>
    <div
      className='page-creation__section'
      id='projects'>
      <div className='page-creation__content'>
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
    </div>
    <div className='page-creation__section section__right' />
  </>
);

const renderSectionCustomers = () => (
  <>
    <div className='page-creation__section section__left section__customers'>
      <div className='side-title'>{Localizer.localize('creation.customers.side_title')}</div>
    </div>
    <div
      className='page-creation__section section__customers'
      id='customers'>
      <div className='page-creation__content'>
        <div className='page-creation__paragraph title'>{Localizer.localize('creation.customers.title')}</div>
        <div className='page-creation__paragraph'>{Localizer.localize('creation.customers.paragraph')}</div>
        <div className='page-creation__paragraph huge'>{Localizer.localize('creation.customers.thanks')}</div>
      </div>
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
          src={creation} />
        {renderSectionCustomers()}
      </div>
      <Footer />
    </div>
  );
};

export default Creation;
