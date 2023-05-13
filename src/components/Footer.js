/* @flow */

import './Footer.scss';
import * as React from 'react';
import {HashLink} from 'react-router-hash-link';
import {Localizer} from '../helpers/localizer';
import NewsletterPopup from './NewsletterPopup';
import Social from './Social';
import useNewsletterPopup from '../hooks/use-newsletter-popup';
import {useSelector} from 'react-redux';

const Footer = (): React.Node => {
  const language = useSelector((state) => state.language);
  const version = useSelector((state) => state.version);

  const [isVisible, toggle] = useNewsletterPopup();

  return (
    <div className='footer'>
      <Social className='footer__social' />
      <div className='footer__links'>
        <HashLink to={`/${language}/legal-notice#top`}>{Localizer.localize('footer.legal_notice')}</HashLink>
        <HashLink to={`/${language}/privacy-policy#top`}>{Localizer.localize('footer.privacy_policy')}</HashLink>
        <HashLink to={`/${language}/join-us#top`}>{Localizer.localize('footer.join_us')}</HashLink>
        <HashLink to={`/${language}/contact#top`}>{Localizer.localize('footer.contact')}</HashLink>
        <button
          onClick={toggle}
          type='button'>{Localizer.localize('footer.newsletter')}</button>
      </div>
      <div className='footer__version'>{version}</div>
      <NewsletterPopup
        hide={toggle}
        isVisible={isVisible} />
    </div>
  );
};

export default Footer;
