/* @flow */

import './LegalNotice.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Link} from 'react-router-dom';
import {Localizer} from '../helpers/localizer';
import logo from '../assets/svg/logo.svg';
import {useSelector} from 'react-redux';

const LegalNotice = (): React.Node => {
  const language = useSelector((state) => state.language);

  return (
    <div
      className='page page-legal-notice'
      id='legal-notice'>
      <Header />
      <div className='legal-notice__container'>
        <img
          alt='Logo Egon Paris'
          draggable={false}
          src={logo} />
        <div className='legal-notice__title title-red'>{Localizer.localize('legal_notice.title')}</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-bold'>{Localizer.localize('legal_notice.last_update')}</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-date paragraph-margin-v'>15/09/2022</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-welcome'>{Localizer.localize('legal_notice.welcome')}</div>
        <div className='legal-notice__paragraph paragraph-underline paragraph-margin-v'>{Localizer.localize('legal_notice.law')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('legal_notice.owner')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('legal_notice.address')}</div>
        <div className='legal-notice__paragraph'>
          <span>{Localizer.localize('legal_notice.publication_director')}</span>
          <a
            href='mailto:sbreton@egonparis.com'
            rel='noopener noreferrer'
            target='_blank'>sbreton@egonparis.com</a>
        </div>
        <div className='legal-notice__paragraph'>{Localizer.localize('legal_notice.host')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('legal_notice.please_read')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('legal_notice.right_to_update')}</div>
        <div className='legal-notice__paragraph paragraph-bold'>{Localizer.localize('legal_notice.disclaimer_label')}</div>
        <ul>
          <li>{Localizer.localize('legal_notice.disclaimer_line1')}</li>
          <li>{Localizer.localize('legal_notice.disclaimer_line2')}</li>
          <li>{Localizer.localize('legal_notice.disclaimer_line3')}</li>
        </ul>
        <div className='legal-notice__title'>{Localizer.localize('legal_notice.website_protection')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('legal_notice.copy_forbidden')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('legal_notice.website_copyright')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('legal_notice.photos_copyright')}</div>
        <div className='legal-notice__title'>{Localizer.localize('legal_notice.data_protection')}</div>
        <div className='legal-notice__paragraph'>
          <span>{Localizer.localize('legal_notice.no_data_collect')}</span>
          <a
            href='mailto:egon@egonparis.com'
            rel='noopener noreferrer'
            target='_blank'>egon@egonparis.com</a></div>
        <div className='legal-notice__paragraph'>
          <span>{Localizer.localize('legal_notice.privacy_policy_introduction')}</span>
          <Link to={`/${language}/privacy-policy`}>{Localizer.localize('legal_notice.privacy_policy_link')}</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalNotice;
