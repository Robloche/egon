/* @flow */

import './Home.scss';
import * as React from 'react';
import AnimatedText from './AnimatedText';
import CarouselClients from './CarouselClients';
import CarouselManifest from './CarouselManifest';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import {delayedSetIds} from '../helpers/scroll';
import egon1 from '../assets/images/egon-by-severine_144.png';
import egon2 from '../assets/images/egon-by-severine_287.png';
import egon3 from '../assets/images/egon-by-severine_430.png';
import egon4 from '../assets/images/egon-by-severine_573.png';
import michele1 from '../assets/images/michele_200.png';
import michele2 from '../assets/images/michele_400.png';
import michele3 from '../assets/images/michele_600.png';
import michele4 from '../assets/images/michele_800.png';
import qrCode from '../assets/svg/qr-code.svg';
import severine1 from '../assets/images/severine_200.png';
import severine2 from '../assets/images/severine_400.png';
import severine3 from '../assets/images/severine_600.png';
import severine4 from '../assets/images/severine_800.png';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {useSelector} from 'react-redux';

const renderSectionFirstName = () => {
  const {inView, ref} = useInView();

  return (
    <>
      <div
        className='page-agency__first-name page-agency__section'
        data-id='first-name'>
        <div className='side-title'>{Localizer.localize('agency.first_name.side_title')}</div>
        <div className='first-name__drawing'>
          <img
            alt='Egon by Séverine'
            sizes='(max-width: 900px) 144px, (max-width: 1200px) 287px, (max-width: 1400px) 430px, 573px'
            src={egon4}
            srcSet={`${egon1} 144w, ${egon2} 287w, ${egon3} 430w, ${egon4} 573w`} />
          <div className='first-name__copyright'>&#169; SB</div>
        </div>
        <AnimatedText
          classList='first-name__content'
          direction='up'>
          <div className='first-name__title title'>{Localizer.localize('agency.first_name.why_egon')}</div>
          <div className='first-name__paragraph'>{Localizer.localize('agency.first_name.paragraph1')}</div>
          <div
            className='first-name__paragraph paragraph-bold'>{Localizer.localize('agency.first_name.paragraph2')}</div>
          <div className='first-name__severine'>Séverine Breton Join-Diéterle</div>
          <div className='first-name__founder'>{Localizer.localize('agency.first_name.founder')}</div>
        </AnimatedText>
        <div className='first-name__pronunciation'>
          <a
            href='https://www.youtube.com/watch?v=H5kkx2Lk5x4'
            rel='noopener noreferrer'
            target='_blank'>
            <img
              alt='QR code pointant vers la prononciation du prénom Egon'
              src={qrCode} />
          </a>
          <div
            className={`first-name__line ${inView ? 'visible' : ''}`}
            ref={ref} />
          <div className='first-name__how'>{Localizer.localize('agency.first_name.pronunciation')}</div>
        </div>
      </div>
      <div className='section__closing first-name__closing'>
        <div className='first-name__closing-content'>
          <AnimatedText
            classList='first-name__title title title-white'
            direction='up'
            stringKey='agency.first_name.closing' />
        </div>
      </div>
    </>
  );
};

const renderSectionPhilosophy = () => (
  <>
    <div className='page-agency__grid-section section__left'>
      <div className='side-title'>{Localizer.localize('agency.philosophy.side_title')}</div>
    </div>
    <div
      className='page-agency__philosophy page-agency__grid-section'
      data-id='philosophy'>
      <AnimatedText
        classList='philosophy__content'
        direction='up'>
        <div className='philosophy__title title'>{Localizer.localize('agency.philosophy.title')}</div>
        <div className='philosophy__paragraph-title'>{Localizer.localize('agency.philosophy.paragraph1_title')}</div>
        <div className='philosophy__paragraph-content'>{Localizer.localize('agency.philosophy.paragraph1_text')}</div>
        <div className='philosophy__paragraph-title'>{Localizer.localize('agency.philosophy.paragraph2_title')}</div>
        <div className='philosophy__paragraph-content'>{Localizer.localize('agency.philosophy.paragraph2_text')}</div>
        <div className='philosophy__paragraph-title'>{Localizer.localize('agency.philosophy.paragraph3_title')}</div>
        <div className='philosophy__paragraph-content spaced'>
          <span>{Localizer.localize('agency.philosophy.paragraph4_title')}</span>
          <span>{Localizer.localize('agency.philosophy.paragraph4_text')}</span>
        </div>
      </AnimatedText>
    </div>
    <div className='page-agency__grid-section section__right' />
    <div className='section__closing philosophy__closing'>
      <div className='philosophy__closing-content'>
        <AnimatedText
          classList='philosophy__title title title-white'
          direction='up'
          stringKey='agency.philosophy.closing' />
        <div className='philosophy__contact'>
          <div>{Localizer.localize('agency.philosophy.contact_us')}</div>
          <a
            href='mailto:egon@egonparis.com'
            rel='noopener noreferrer'
            target='_blank'>egon@egonparis.com</a>
        </div>
      </div>
    </div>
  </>
);

// eslint-disable-next-line no-unused-vars
const renderSectionManifest = () => {
  const {inView, ref} = useInView();

  return (
    <>
      <div className='page-agency__grid-section section__left section__manifest'>
        <div className='side-title title-white'>{Localizer.localize('agency.manifest.side_title')}</div>
      </div>
      <div
        className='page-agency__manifest page-agency__grid-section'
        data-id='manifest'>
        <div className='manifest__content'>
          <div className='manifest__title title'>
            <div>{Localizer.localize('agency.manifest.paragraph1_title')}</div>
            <div className='manifest__title-line-number'>
              <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph1_number')}</div>
              <div className={`manifest__title-line right ${inView ? 'visible' : ''}`} />
            </div>
          </div>
          <div className='manifest__text'>{Localizer.localize('agency.manifest.paragraph1_text')}</div>
          <div className='manifest__title title manifest-right'>
            <div className='manifest__title-line-number'>
              <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph2_number')}</div>
              <div className={`manifest__title-line left ${inView ? 'visible' : ''}`} />
            </div>
            <div>{Localizer.localize('agency.manifest.paragraph2_title')}</div>
          </div>
          <div className='manifest__text manifest-right'>{Localizer.localize('agency.manifest.paragraph2_text')}</div>
          <div className='manifest__title title'>
            <div>{Localizer.localize('agency.manifest.paragraph3_title')}</div>
            <div className='manifest__title-line-number'>
              <div className='manifest__title-number'>{Localizer.localize('agency.manifest.paragraph3_number')}</div>
              <div
                className={`manifest__title-line right ${inView ? 'visible' : ''}`}
                ref={ref} />
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
};

const renderSectionFounder = () => (
  <div
    className='page-agency__team founder page-agency__section'
    data-id='founder'>
    <img
      alt="Séverine Breton Join-Diéterle, fondatrice d'Egon Paris"
      sizes='(max-width: 600px) 200px, (max-width: 900px) 400px, (max-width: 1400px) 600px, 800px'
      src={severine4}
      srcSet={`${severine1} 200w, ${severine2} 400w, ${severine3} 600w, ${severine4} 800w`} />
    <div className='team__content founder'>
      <div className='team__title title'>Séverine Breton Join-Diéterle</div>
      <div className='team__label'>{Localizer.localize('agency.founder.title')}</div>
      <div className='team__paragraph paragraph-highlight'>{Localizer.localize('agency.founder.paragraph1')}</div>
      <div className='team__paragraph'>{Localizer.localize('agency.founder.paragraph2')}</div>
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

const renderSectionCreativeDirector = () => (
  <div
    className='page-agency__team creative-director page-agency__section'
    data-id='creative-director'>
    <div className='team__content creative-director'>
      <div className='team__title title'>Michele Bulgherini</div>
      <div className='team__label'>{Localizer.localize('agency.creative_director.title')}</div>
      <div
        className='team__paragraph paragraph-highlight'>{Localizer.localize('agency.creative_director.paragraph1')}</div>
      <div className='team__paragraph'>{Localizer.localize('agency.creative_director.paragraph2')}</div>
    </div>
    <img
      alt="Michele Bulgherini, directeur de création d'Egon Paris"
      sizes='(max-width: 600px) 200px, (max-width: 900px) 400px, (max-width: 1400px) 600px, 800px'
      src={michele4}
      srcSet={`${michele1} 200w, ${michele2} 400w, ${michele3} 600w, ${michele4} 800w`} />
  </div>
);

const Home = (): React.Node => {
  useSelector((state) => state.language);

  // Initialization
  useEffect(() => {
    /*
     * Wait until everything (especially the carousel) is loaded before setting Ids.
     * This prevents the bug where react-router-hash-link doesn't scroll to the correct location
     */
    delayedSetIds();
  }, []);

  return (
    <div className='page page-agency'>
      <CarouselManifest />
      <Header />
      <CarouselClients />
      {renderSectionFirstName()}
      <div className='page-agency__grid'>
        {renderSectionPhilosophy()}
        {/* {renderSectionManifest()} */}
      </div>
      {renderSectionFounder()}
      {renderSectionCreativeDirector()}
      <Footer />
    </div>
  );
};

export default Home;
