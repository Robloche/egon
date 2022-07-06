/* @flow */

import './Contact.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import logoLarge from '../assets/images/logo_400.png';
import logoSmall from '../assets/images/logo_200.png';
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
          sizes='(max-width: 1000px) 200px, 400px'
          src={logoLarge}
          srcSet={`${logoSmall} 200w, ${logoLarge} 400w`} />
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
