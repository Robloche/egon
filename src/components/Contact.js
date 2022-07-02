/* @flow */

import './Contact.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import logo from '../assets/images/logo.png';
import {useSelector} from 'react-redux';

const Contact = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <div className='page page-contact'>
      <Header />
      <div className='page-contact__content'>
        <div className='side-title'>{Localizer.localize('contact.side_title')}</div>
        <img
          alt='Logo Egon'
          src={logo} />
        <div className='page-contact__info'>
          <div className='page-contact__egon'>Egon</div>
          <div className='page-contact__address'>{Localizer.localize('contact.address1')}</div>
          <div className='page-contact__address'>{Localizer.localize('contact.address2')}</div>
          <a
            href='mailto:egon@egonparis.com'
            rel='noopener noreferrer'
            target='_blank'>egon@egonparis.com</a>
        </div>
      </div>
      <div className='page-contact__landscape' />
      <Footer />
    </div>
  );
};

export default Contact;
