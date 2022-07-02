/* @flow */

import './Home.scss';
import * as React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import egon from '../assets/images/egon-by-severine.png';
import qrCode from '../assets/svg/qr-code.svg';
import severine from '../assets/images/severine.png';
import {useSelector} from 'react-redux';

const renderSectionFirstName = () => (
  <div
    className='page-agency__first-name page-agency__section'
    id='first-name'>
    <div className='side-title'>{Localizer.localize('agency.first_name.side_title')}</div>
    <div className='first-name__drawing'>
      <img
        alt='Egon by Séverine'
        src={egon} />
    </div>
    <div className='first-name__content'>
      <div className='first-name__title'>{Localizer.localize('agency.first_name.why_egon')}</div>
      <div className='first-name__paragraph'>{Localizer.localize('agency.first_name.paragraph1')}</div>
      <div className='first-name__paragraph paragraph-bold'>{Localizer.localize('agency.first_name.paragraph2')}</div>
      <div className='first-name__paragraph paragraph-bold paragraph-blue'>{Localizer.localize('agency.first_name.paragraph3')}</div>
      <div className='first-name__severine'>Séverine Breton Join-Diéterle</div>
      <div className='first-name__founder'>{Localizer.localize('agency.first_name.founder')}</div>
    </div>
    <div className='first-name__pronunciation'>
      <img
        alt='QR code pointant vers la prononciation du prénom Egon'
        src={qrCode} />
      <div className='first-name__line' />
      <div className='first-name__how'>{Localizer.localize('agency.first_name.pronunciation')}</div>
    </div>
  </div>
);


const renderSectionPhilosophy = () => (
  <div
    className='page-agency__philosophy page-agency__section'
    id='philosophy'>
    <div className='side-title'>{Localizer.localize('agency.philosophy.side_title')}</div>
    <div className='philosophy__content'>
      <div className='philosophy__title'>{Localizer.localize('agency.philosophy.title')}</div>
      <div className='philosophy__paragraph-title'>{Localizer.localize('agency.philosophy.paragraph1_title')}</div>
      <div className='philosophy__paragraph-content'>{Localizer.localize('agency.philosophy.paragraph1_text')}</div>
      <div className='philosophy__paragraph-title'>{Localizer.localize('agency.philosophy.paragraph2_title')}</div>
      <div className='philosophy__paragraph-content'>{Localizer.localize('agency.philosophy.paragraph2_text')}</div>
      <div className='philosophy__paragraph-title'>{Localizer.localize('agency.philosophy.paragraph3_title')}</div>
      <div className='philosophy__paragraph-content'>{Localizer.localize('agency.philosophy.paragraph3_text')}</div>
      <div className='philosophy__paragraph-title'>{Localizer.localize('agency.philosophy.paragraph4_title')}</div>
      <div className='philosophy__paragraph-content spaced'>
        <span>{Localizer.localize('agency.philosophy.paragraph5_title')}</span>
        <span>{Localizer.localize('agency.philosophy.paragraph5_text')}</span>
      </div>
    </div>
    <div className='philosophy__closing'>
      <div className='philosophy__closing-content'>
        <div className='philosophy__title title-white'>{Localizer.localize('agency.philosophy.closing')}</div>
        <div className='philosophy__contact'>
          <div>{Localizer.localize('agency.philosophy.contact_us')}</div>
          <a
            href='mailto:egon@egonparis.com'
            rel='noopener noreferrer'
            target='_blank'>egon@egonparis.com</a>
        </div>
      </div>
    </div>
  </div>
);

const renderSectionManifest = () => (
  <div
    className='page-agency__manifest page-agency__section'
    id='manifest'>
    <div className='side-title'>{Localizer.localize('agency.manifest.side_title')}</div>
    <div className='manifest__content'>
      <div className='manifest__title'>
        <div>{Localizer.localize('agency.manifest.paragraph1_title')}</div>
        <div className='manifest__title-line-number'>
          <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph1_number')}</div>
          <div className='manifest__title-line' />
        </div>
      </div>
      <div className='manifest__text'>{Localizer.localize('agency.manifest.paragraph1_text')}</div>
      <div className='manifest__title manifest-right'>
        <div className='manifest__title-line-number'>
          <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph2_number')}</div>
          <div className='manifest__title-line' />
        </div>
        <div>{Localizer.localize('agency.manifest.paragraph2_title')}</div>
      </div>
      <div className='manifest__text manifest-right'>{Localizer.localize('agency.manifest.paragraph2_text')}</div>
      <div className='manifest__title'>
        <div>{Localizer.localize('agency.manifest.paragraph3_title')}</div>
        <div className='manifest__title-line-number'>
          <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph3_number')}</div>
          <div className='manifest__title-line' />
        </div>
      </div>
      <div className='manifest__text'>{Localizer.localize('agency.manifest.paragraph3_text')}</div>
      <div className='manifest__section--right'>
        <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph4_number')}</div>
        <div className='manifest__title'>{Localizer.localize('agency.manifest.paragraph4_title')}</div>
        <div className='manifest__text'>{Localizer.localize('agency.manifest.paragraph4_text')}</div>
      </div>
    </div>
  </div>
);

const renderSectionFounder = () => (
  <div
    className='page-agency__founder page-agency__section'
    id='founder'>
    <div className='side-title'>{Localizer.localize('agency.founder.side_title')}</div>
    <img
      alt="Séverine Breton Join-Diéterle, fondatrice d'Egon Paris"
      src={severine} />
    <div className='founder__content'>
      <div className='founder__title'>Séverine Breton Join-Diéterle</div>
      <div className='founder__label'>{Localizer.localize('agency.founder.title')}</div>
      <div className='founder__paragraph paragraph-highlight'>{Localizer.localize('agency.founder.paragraph1')}</div>
      <div className='founder__paragraph'>{Localizer.localize('agency.founder.paragraph2')}</div>
      <div className='founder__contact'>
        <div>{Localizer.localize('agency.founder.contact_me')}</div>
        <a
          href='mailto:sbreton@egonparis.com'
          rel='noopener noreferrer'
          target='_blank'>sbreton@egonparis.com</a>
      </div>
    </div>
  </div>
);

const Home = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <div className='page page-agency'>
      <Carousel />
      <div className='page-agency__name'>
        <div className='page-agency__egon'>{Localizer.localize('common.egon')}</div>
        <div className='page-agency__tagline'>
          <div>{Localizer.localize('agency.tagline1')}</div>
          <div>{Localizer.localize('agency.tagline2')}</div>
        </div>
      </div>
      <Header />
      {renderSectionFirstName()}
      {renderSectionPhilosophy()}
      {renderSectionManifest()}
      {renderSectionFounder()}
      <Footer />
    </div>
  );
};

export default Home;
