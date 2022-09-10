/* @flow */

import './Footer.scss';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {HashLink} from 'react-router-hash-link';
import {Localizer} from '../helpers/localizer';
import NewsletterPopup from './NewsletterPopup';
import Social from './Social';
import {scrollTop} from '../helpers/scroll';
import useNewsletterPopup from '../hooks/useNewsletterPopup';
import {useSelector} from 'react-redux';

const fetchVersion = async(setVersion): Promise<void> => {
  try {
    const response = await fetch('/version.json');
    const json = await response.json();
    setVersion(json.version);
  } catch (error) {
    setVersion('');
  }
};

const Footer = (): React.Node => {
  const language = useSelector((state) => state.language);

  const {isVisible, toggle} = useNewsletterPopup();
  const [version, setVersion] = useState('');

  useEffect(() => {
    fetchVersion(setVersion);
  }, [setVersion]);

  return (
    <div className='footer'>
      <Social className='footer__social' />
      <div className='footer__links'>
        <HashLink
          scroll={scrollTop}
          to={`/${language}/legal-notice#top`}>{Localizer.localize('footer.legal_notice')}</HashLink>
        <HashLink
          scroll={scrollTop}
          to={`/${language}/privacy-policy#top`}>{Localizer.localize('footer.privacy_policy')}</HashLink>
        <HashLink
          scroll={scrollTop}
          to={`/${language}/join-us#top`}>{Localizer.localize('footer.join_us')}</HashLink>
        <HashLink
          scroll={scrollTop}
          to={`/${language}/contact#top`}>{Localizer.localize('footer.contact')}</HashLink>
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
