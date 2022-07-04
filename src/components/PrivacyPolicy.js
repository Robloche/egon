/* @flow */

import './LegalNotice.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import logo from '../assets/svg/logo.svg';
import {useSelector} from 'react-redux';

const PrivacyPolicy = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <div className='page page-legal-notice'>
      <Header />
      <div className='legal-notice__container'>
        <img
          alt='Logo Egon Paris'
          draggable={false}
          src={logo} />
        <div className='legal-notice__title title-red'>{Localizer.localize('privacy_policy.title')}</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-bold'>{Localizer.localize('privacy_policy.last_update')}</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-date paragraph-margin-v'>15/09/2022</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-welcome'>{Localizer.localize('privacy_policy.welcome')}</div>
        <div className='legal-notice__paragraph paragraph-underline paragraph-margin-v'>{Localizer.localize('privacy_policy.law')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.owner')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.address')}</div>
        <div className='legal-notice__paragraph'>
          <span>{Localizer.localize('privacy_policy.publication_director')}</span>
          <a
            href='mailto:sbreton@egonparis.com'
            rel='noopener noreferrer'
            target='_blank'>sbreton@egonparis.com</a>
        </div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.host')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.please_read')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.right_to_update')}</div>
        <div className='legal-notice__paragraph paragraph-bold'>{Localizer.localize('privacy_policy.disclaimer_label')}</div>
        <ul>
          <li>{Localizer.localize('privacy_policy.disclaimer_line1')}</li>
          <li>{Localizer.localize('privacy_policy.disclaimer_line2')}</li>
          <li>{Localizer.localize('privacy_policy.disclaimer_line3')}</li>
        </ul>
        <div className='legal-notice__title'>{Localizer.localize('privacy_policy.website_protection')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.copy_forbidden')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.website_copyright')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.photos_copyright')}</div>
        <div className='legal-notice__title'>{Localizer.localize('privacy_policy.data_protection')}</div>
        <div className='legal-notice__paragraph'>
          <span>{Localizer.localize('privacy_policy.no_data_collect')}</span>
          <a
            href='mailto:egon@egonparis.com'
            rel='noopener noreferrer'
            target='_blank'>egon@egonparis.com</a></div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
