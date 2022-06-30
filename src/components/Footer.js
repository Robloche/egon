/* @flow */

import './Footer.scss';
import * as React from 'react';
import {Localizer} from '../helpers/localizer';
import Social from './Social';

const Footer = (): React.Node => <div className='footer'>
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
    <a
      href=''
      rel='noopener noreferrer'
      target='_blank'>{Localizer.localize('footer.join_us')}</a>
    <a
      href=''
      rel='noopener noreferrer'
      target='_blank'>{Localizer.localize('footer.contact')}</a>
    <button type='button'>{Localizer.localize('footer.newsletter')}</button>
  </div>
</div>;

export default Footer;
