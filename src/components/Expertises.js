/* @flow */

import './Expertises.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import {useSelector} from 'react-redux';

const renderSectionStrategy = () => (
  <>
    <div
      className='page-expertises__introduction'
      id='strategy'>
      <div className='side-title'>{Localizer.localize('expertises.strategy.side_title')}</div>
      <div className='page-expertises__content'>
        <div className='page-expertises__title'>{Localizer.localize('expertises.strategy.title')}</div>
        <div className='page-expertises__description'>
          <div>{Localizer.localize('expertises.strategy.paragraph1')}</div>
          <div>{Localizer.localize('expertises.strategy.paragraph2')}</div>
        </div>
      </div>
    </div>
    <div className='page-expertises__listing expertises__image1'>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.strategy.column1.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column1.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column1.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column1.item3')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column1.item4')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column1.item5')}</div>
      </div>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.strategy.column2.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column2.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column2.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column2.item3')}</div>
      </div>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.strategy.column2.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column2.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column2.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column2.item3')}</div>
      </div>
    </div>
    <div className='page-expertises__closing'>{Localizer.localize('expertises.strategy.closing')}</div>
  </>
);

const renderSectionCreation = () => (
  <>
    <div
      className='page-expertises__introduction'
      id='creation'>
      <div className='side-title'>{Localizer.localize('expertises.creation.side_title')}</div>
      todo
    </div>
    <div className='page-expertises__listing expertises__image2'>todo</div>
    <div className='page-expertises__closing'>{Localizer.localize('expertises.creation.closing')}</div>
  </>
);

const renderSectionDigital = () => (
  <>
    <div
      className='page-expertises__introduction'
      id='digital'>
      <div className='side-title'>{Localizer.localize('expertises.digital.side_title')}</div>
      todo
    </div>
    <div className='page-expertises__listing expertises__image3'>todo</div>
    <div className='page-expertises__closing'>{Localizer.localize('expertises.digital.closing')}</div>
  </>
);

const renderSectionEdition = () => (
  <>
    <div
      className='page-expertises__introduction'
      id='edition'>
      <div className='side-title'>{Localizer.localize('expertises.edition.side_title')}</div>
      todo
    </div>
    <div className='page-expertises__listing expertises__image4'>todo</div>
    <div className='page-expertises__closing'>{Localizer.localize('expertises.edition.closing')}</div>
  </>
);

const renderSectionProduction = () => (
  <>
    <div
      className='page-expertises__introduction'
      id='production'>
      <div className='side-title'>{Localizer.localize('expertises.production.side_title')}</div>
      todo
    </div>
    <div className='page-expertises__listing expertises__image5'>todo</div>
    <div className='page-expertises__closing'>{Localizer.localize('expertises.production.closing')}</div>
  </>
);

const Expertises = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <div className='page page-expertises'>
      <Header />
      {renderSectionStrategy()}
      {renderSectionCreation()}
      {renderSectionDigital()}
      {renderSectionEdition()}
      {renderSectionProduction()}
      <Footer />
    </div>
  );
};

export default Expertises;
