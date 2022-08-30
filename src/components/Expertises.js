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
      className='page-expertises__section section__left'
      id='strategy'>
      <div className='side-title'>{Localizer.localize('expertises.strategy.side_title')}</div>
    </div>
    <div className='page-expertises__title title'>{Localizer.localize('expertises.strategy.title')}</div>
    <div className='page-expertises__description'>
      <div>{Localizer.localize('expertises.strategy.paragraph1')}</div>
      <div>{Localizer.localize('expertises.strategy.paragraph2')}</div>
    </div>
    <div className='page-expertises__section section__right' />
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
        <div className='listing__title'>{Localizer.localize('expertises.strategy.column3.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column3.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column3.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.strategy.column3.item3')}</div>
      </div>
    </div>
    <div className='page-expertises__closing title closing1'>{Localizer.localize('expertises.strategy.closing')}</div>
  </>
);

const renderSectionCreation = () => (
  <>
    <div
      className='page-expertises__section section__left'
      id='creation'>
      <div className='side-title'>{Localizer.localize('expertises.creation.side_title')}</div>
    </div>
    <div className='page-expertises__title title'>{Localizer.localize('expertises.creation.title')}</div>
    <div className='page-expertises__description'>
      <div>{Localizer.localize('expertises.creation.paragraph1')}</div>
      <div>{Localizer.localize('expertises.creation.paragraph2')}</div>
    </div>
    <div className='page-expertises__section section__right' />
    <div className='page-expertises__listing expertises__image2'>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.creation.column1.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.creation.column1.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.creation.column1.item2')}</div>
      </div>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.creation.column2.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.creation.column2.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.creation.column2.item2')}</div>
      </div>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.creation.column3.title')}</div>
        <div className='listing__title'>{Localizer.localize('expertises.creation.column4.title')}</div>
        <div className='listing__title'>{Localizer.localize('expertises.creation.column5.title')}</div>
      </div>
    </div>
    <div className='page-expertises__closing title closing2'>{Localizer.localize('expertises.creation.closing')}</div>
  </>
);

const renderSectionDigital = () => (
  <>
    <div
      className='page-expertises__section section__left'
      id='digital'>
      <div className='side-title'>{Localizer.localize('expertises.digital.side_title')}</div>
    </div>
    <div className='page-expertises__title title'>{Localizer.localize('expertises.digital.title')}</div>
    <div className='page-expertises__description'>
      <div>{Localizer.localize('expertises.digital.paragraph1')}</div>
      <div>{Localizer.localize('expertises.digital.paragraph2')}</div>
    </div>
    <div className='page-expertises__section section__right' />
    <div className='page-expertises__listing expertises__image3'>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.digital.column1.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column1.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column1.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column1.item3')}</div>
      </div>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.digital.column2.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column2.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column2.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column2.item3')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column2.item4')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column2.item5')}</div>
      </div>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.digital.column3.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column3.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column3.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column3.item3')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.digital.column3.item4')}</div>
      </div>
    </div>
    <div className='page-expertises__closing title closing3'>{Localizer.localize('expertises.digital.closing')}</div>
  </>
);

const renderSectionEdition = () => (
  <>
    <div
      className='page-expertises__section section__left'
      id='edition'>
      <div className='side-title'>{Localizer.localize('expertises.edition.side_title')}</div>
    </div>
    <div className='page-expertises__title title'>{Localizer.localize('expertises.edition.title')}</div>
    <div className='page-expertises__description'>
      <div>{Localizer.localize('expertises.edition.paragraph1')}</div>
      <div>{Localizer.localize('expertises.edition.paragraph2')}</div>
    </div>
    <div className='page-expertises__section section__right' />
    <div className='page-expertises__listing expertises__image4'>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.edition.column1.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column1.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column1.item2')}</div>
      </div>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.edition.column2.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column2.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column2.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column2.item3')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column2.item4')}</div>
      </div>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.edition.column3.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column3.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column3.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column3.item3')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column3.item4')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column3.item5')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column3.item6')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.edition.column3.item7')}</div>
      </div>
    </div>
    <div className='page-expertises__closing title closing4'>{Localizer.localize('expertises.edition.closing')}</div>
  </>
);

const renderSectionProduction = () => (
  <>
    <div
      className='page-expertises__section section__left'
      id='production'>
      <div className='side-title'>{Localizer.localize('expertises.production.side_title')}</div>
    </div>
    <div className='page-expertises__title title'>{Localizer.localize('expertises.production.title')}</div>
    <div className='page-expertises__description'>
      <div>{Localizer.localize('expertises.production.paragraph1')}</div>
      <div>{Localizer.localize('expertises.production.paragraph2')}</div>
    </div>
    <div className='page-expertises__section section__right' />
    <div className='page-expertises__listing expertises__image5'>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.production.column1.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.production.column1.item1')}</div>
        <div className='listing__title'>{Localizer.localize('expertises.production.column2.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.production.column2.item1')}</div>
      </div>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.production.column3.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.production.column3.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.production.column3.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.production.column3.item3')}</div>
      </div>
      <div>
        <div className='listing__title'>{Localizer.localize('expertises.production.column4.title')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.production.column4.item1')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.production.column4.item2')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.production.column4.item3')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.production.column4.item4')}</div>
        <div className='listing__item'>{Localizer.localize('expertises.production.column4.item5')}</div>
      </div>
    </div>
    <div className='page-expertises__closing title closing5'>{Localizer.localize('expertises.production.closing')}</div>
  </>
);

const Expertises = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <div className='page page-expertises'>
      <Header />
      <div className='page-expertises__container'>
        {renderSectionStrategy()}
        {renderSectionCreation()}
        {renderSectionDigital()}
        {renderSectionEdition()}
        {renderSectionProduction()}
      </div>
      <Footer />
    </div>
  );
};

export default Expertises;
