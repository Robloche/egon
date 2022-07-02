/* @flow */

import './Footer.scss';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {Localizer} from '../helpers/localizer';
import Social from './Social';
import {useSelector} from 'react-redux';

const Footer = (): React.Node => {
  const language = useSelector((state) => state.language);

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
        <button type='button'>{Localizer.localize('footer.newsletter')}</button>
      </div>
    </div>
  );
};

export default Footer;
