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

  const [isVisible, show, hide] = useNewsletterPopup();

  return (
    <div className='footer'>
      <Social className='footer__social' />
      <div className='footer__links'>
        <HashLink
          className='underlined'
          to={`/${language}/legal-notice#top`}>{Localizer.localize('footer.legal_notice')}</HashLink>
        <HashLink
          className='underlined'
          to={`/${language}/privacy-policy#top`}>{Localizer.localize('footer.privacy_policy')}</HashLink>
        <HashLink
          className='underlined'
          to={`/${language}/join-us#top`}>{Localizer.localize('footer.join_us')}</HashLink>
        <HashLink
          className='underlined'
          to={`/${language}/contact#top`}>{Localizer.localize('footer.contact')}</HashLink>
        <button
          onClick={show}
          type='button'>{Localizer.localize('footer.newsletter')}</button>
      </div>
      <div className='footer__version'>{version}</div>
      <NewsletterPopup
        hide={hide}
        isVisible={isVisible} />
    </div>
  );
};

export default Footer;
