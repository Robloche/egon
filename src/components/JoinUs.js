/* @flow */

import './JoinUs.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import logoLarge from '../assets/images/logo_400.png';
import logoSmall from '../assets/images/logo_200.png';
import {useSelector} from 'react-redux';

const JoinUs = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <div
      className='page page-join-us'
      id='top'>
      <Header />
      <div className='page-join-us__content'>
        <div className='section__left'>
          <div className='side-title'>{Localizer.localize('join_us.side_title')}</div>
        </div>
        <img
          alt='Logo Egon'
          sizes='(max-width: 1200px) 200px, 400px'
          src={logoLarge}
          srcSet={`${logoSmall} 200w, ${logoLarge} 400w`} />
        <div className='page-join-us__info'>
          <div className='page-join-us__title title'>{Localizer.localize('join_us.title')}</div>
          <div className='page-join-us__address'>{Localizer.localize('join_us.paragraph')}</div>
          <a
            href='mailto:egon@egonparis.com'
            rel='noopener noreferrer'
            target='_blank'>egon@egonparis.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinUs;
