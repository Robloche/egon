/* @flow */

import './JoinUs.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import logo from '../assets/images/logo.png';
import {useSelector} from 'react-redux';

const JoinUs = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <div className='page page-join-us'>
      <Header />
      <div className='page-join-us__content'>
        <div className='side-title'>{Localizer.localize('join_us.side_title')}</div>
        <img
          alt='Logo Egon'
          src={logo} />
        <div className='page-join-us__info'>
          <div className='page-join-us__title'>{Localizer.localize('join_us.title')}</div>
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
