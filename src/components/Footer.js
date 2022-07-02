/* @flow */

import './Footer.scss';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {Localizer} from '../helpers/localizer';
import NewsletterPopup from './NewsletterPopup';
import Social from './Social';
import useNewsletterPopup from '../hooks/useNewsletterPopup';
import {useSelector} from 'react-redux';

const Footer = (): React.Node => {
  const language = useSelector((state) => state.language);

  const {isVisible, toggle} = useNewsletterPopup();

  return (
    <div className='footer'>
      <Social className='footer__social' />
      <div className='footer__links'>
        <a
          href=''
          rel='noopener noreferrer'
          target='_blank'>{Localizer.localize('footer.legal_notice')}</a>
        <a
          href=''
          rel='noopener noreferrer'
          target='_blank'>{Localizer.localize('footer.privacy_policy')}</a>
        <Link to={`/${language}/join-us`}>{Localizer.localize('footer.join_us')}</Link>
        <Link to={`/${language}/contact`}>{Localizer.localize('footer.contact')}</Link>
        <button
          onClick={toggle}
          type='button'>{Localizer.localize('footer.newsletter')}</button>
      </div>
      <NewsletterPopup
        hide={toggle}
        isVisible={isVisible} />
    </div>
  );
};

export default Footer;
