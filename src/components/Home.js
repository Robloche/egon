/* @flow */

import './Home.scss';
import * as React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import egon1 from '../assets/images/egon-by-severine_144.png';
import egon2 from '../assets/images/egon-by-severine_287.png';
import egon3 from '../assets/images/egon-by-severine_430.png';
import egon4 from '../assets/images/egon-by-severine_573.png';
import qrCode from '../assets/svg/qr-code.svg';
import severine1 from '../assets/images/severine_200.png';
import severine2 from '../assets/images/severine_400.png';
import severine3 from '../assets/images/severine_600.png';
import severine4 from '../assets/images/severine_800.png';
import {useSelector} from 'react-redux';

const renderSectionFirstName = () => (
  <div
    className='page-agency__first-name page-agency__section'
    id='first-name'>
    <div className='side-title'>{Localizer.localize('agency.first_name.side_title')}</div>
    <div className='first-name__drawing'>
      <img
        alt='Egon by Séverine'
        sizes='(max-width: 900px) 144px, (max-width: 1200px) 287px, (max-width: 1400px) 430px, 573px'
        src={egon4}
        srcSet={`${egon1} 144w, ${egon2} 287w, ${egon3} 430w, ${egon4} 573w`} />
      <div className='first-name__copyright'>&#169; SB</div>
    </div>
    <div className='first-name__content'>
      <div className='first-name__title title'>{Localizer.localize('agency.first_name.why_egon')}</div>
      <div className='first-name__paragraph'>{Localizer.localize('agency.first_name.paragraph1')}</div>
      <div className='first-name__paragraph paragraph-bold'>{Localizer.localize('agency.first_name.paragraph2')}</div>
      <div className='first-name__paragraph paragraph-bold paragraph-blue'>{Localizer.localize('agency.first_name.paragraph3')}</div>
      <div className='first-name__severine'>Séverine Breton Join-Diéterle</div>
      <div className='first-name__founder'>{Localizer.localize('agency.first_name.founder')}</div>
    </div>
    <div className='first-name__pronunciation'>
      <a
        href='https://www.youtube.com/watch?v=H5kkx2Lk5x4'
        rel='noopener noreferrer'
        target='_blank'>
        <img
          alt='QR code pointant vers la prononciation du prénom Egon'
          src={qrCode} />
      </a>
      <div className='first-name__line' />
      <div className='first-name__how'>{Localizer.localize('agency.first_name.pronunciation')}</div>
    </div>
  </div>
);

const renderSectionPhilosophy = () => (
  <>
    <div className='page-agency__grid-section section__left'>
      <div className='side-title'>{Localizer.localize('agency.philosophy.side_title')}</div>
    </div>
    <div
      className='page-agency__philosophy page-agency__grid-section'
      id='philosophy'>
      <div className='philosophy__content'>
        <div className='philosophy__title title'>{Localizer.localize('agency.philosophy.title')}</div>
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
    </div>
    <div className='page-agency__grid-section section__right' />
  </>
);

const renderSectionManifest = () => (
  <>
    <div className='page-agency__grid-section section__left section__manifest'>
      <div className='side-title title-white'>{Localizer.localize('agency.philosophy.side_title')}</div>
    </div>
    <div
      className='page-agency__manifest page-agency__grid-section'
      id='manifest'>
      <div className='manifest__content'>
        <div className='manifest__title title'>
          <div>{Localizer.localize('agency.manifest.paragraph1_title')}</div>
          <div className='manifest__title-line-number'>
            <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph1_number')}</div>
            <div className='manifest__title-line' />
          </div>
        </div>
        <div className='manifest__text'>{Localizer.localize('agency.manifest.paragraph1_text')}</div>
        <div className='manifest__title title manifest-right'>
          <div className='manifest__title-line-number'>
            <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph2_number')}</div>
            <div className='manifest__title-line' />
          </div>
          <div>{Localizer.localize('agency.manifest.paragraph2_title')}</div>
        </div>
        <div className='manifest__text manifest-right'>{Localizer.localize('agency.manifest.paragraph2_text')}</div>
        <div className='manifest__title title'>
          <div>{Localizer.localize('agency.manifest.paragraph3_title')}</div>
          <div className='manifest__title-line-number'>
            <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph3_number')}</div>
            <div className='manifest__title-line' />
          </div>
        </div>
        <div className='manifest__text'>{Localizer.localize('agency.manifest.paragraph3_text')}</div>
        <div className='manifest__section'>
          <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph4_number')}</div>
          <div className='manifest__title'>{Localizer.localize('agency.manifest.paragraph4_title')}</div>
          <div className='manifest__text'>{Localizer.localize('agency.manifest.paragraph4_text')}</div>
        </div>
      </div>
    </div>
    <div className='page-agency__grid-section section__right section__manifest' />
  </>
);

const renderSectionFounder = () => (
  <div
    className='page-agency__founder page-agency__section'
    id='founder'>
    <img
      alt="Séverine Breton Join-Diéterle, fondatrice d'Egon Paris"
      sizes='(max-width: 600px) 200px, (max-width: 900px) 400px, (max-width: 1400px) 600px, 800px'
      src={severine4}
      srcSet={`${severine1} 200w, ${severine2} 400w, ${severine3} 600w, ${severine4} 800w`} />
    <div className='founder__content'>
      <div className='founder__title title'>Séverine Breton Join-Diéterle</div>
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
    <div
      className='page page-agency'
      id='carousel'>
      <Carousel />
      <Header />
      {renderSectionFirstName()}
      <div className='page-agency__grid'>
        {renderSectionPhilosophy()}
        <div className='philosophy__closing'>
          <div className='philosophy__closing-content'>
            <div className='philosophy__title title title-white'>{Localizer.localize('agency.philosophy.closing')}</div>
            <div className='philosophy__contact'>
              <div>{Localizer.localize('agency.philosophy.contact_us')}</div>
              <a
                href='mailto:egon@egonparis.com'
                rel='noopener noreferrer'
                target='_blank'>egon@egonparis.com</a>
            </div>
          </div>
        </div>
        {renderSectionManifest()}
      </div>
      {renderSectionFounder()}
      <Footer />
    </div>
  );
};

export default Home;
