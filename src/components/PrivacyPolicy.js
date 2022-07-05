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
    <div
      className='page page-legal-notice'
      id='privacy-policy'>
      <Header />
      <div className='legal-notice__container'>
        <img
          alt='Logo Egon Paris'
          draggable={false}
          src={logo} />
        <div className='legal-notice__title title-red'>{Localizer.localize('privacy_policy.title')}</div>
        <div className='legal-notice__title'>{Localizer.localize('privacy_policy.personal_data_title')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.personal_data_paragraph1')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.personal_data_paragraph2')}</div>
        <div className='legal-notice__title'>{Localizer.localize('privacy_policy.recipients_title')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.recipients_paragraph')}</div>
        <div className='legal-notice__title'>{Localizer.localize('privacy_policy.goal_title')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.goal_paragraph1')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.goal_paragraph2')}</div>
        <ul>
          <li>{Localizer.localize('privacy_policy.goal_line01')}</li>
          <li>{Localizer.localize('privacy_policy.goal_line02')}</li>
          <li>{Localizer.localize('privacy_policy.goal_line03')}</li>
          <li>{Localizer.localize('privacy_policy.goal_line04')}</li>
          <li>{Localizer.localize('privacy_policy.goal_line05')}</li>
          <li>{Localizer.localize('privacy_policy.goal_line06')}</li>
          <li>{Localizer.localize('privacy_policy.goal_line07')}</li>
          <li>{Localizer.localize('privacy_policy.goal_line08')}</li>
          <li>{Localizer.localize('privacy_policy.goal_line09')}</li>
          <li>{Localizer.localize('privacy_policy.goal_line10')}</li>
        </ul>
        <div className='legal-notice__paragraph paragraph-bold'>
          <span>{Localizer.localize('privacy_policy.goal_paragraph3')}</span>
          <a
            href='mailto:egon@egonparis.com'
            rel='noopener noreferrer'
            target='_blank'>egon@egonparis.com</a>
        </div>
        <div className='legal-notice__title'>{Localizer.localize('privacy_policy.confidentiality_title')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.confidentiality_paragraph1')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.confidentiality_paragraph2')}</div>
        <div className='legal-notice__title'>{Localizer.localize('privacy_policy.your_rights_title')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.your_rights_paragraph1')}</div>
        <ul>
          <li>{Localizer.localize('privacy_policy.your_rights_line1')}</li>
          <li>{Localizer.localize('privacy_policy.your_rights_line2')}</li>
          <li>{Localizer.localize('privacy_policy.your_rights_line3')}</li>
          <li>{Localizer.localize('privacy_policy.your_rights_line4')}</li>
          <li>{Localizer.localize('privacy_policy.your_rights_line5')}</li>
        </ul>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.your_rights_paragraph2')}</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-address'>EGON PARIS</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-address'>{Localizer.localize('privacy_policy.address1')}</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-address'>{Localizer.localize('privacy_policy.address2')}</div>
        <div className='legal-notice__paragraph paragraph-center'><a
          href='mailto:egon@egonparis.com'
          rel='noopener noreferrer'
          target='_blank'>egon@egonparis.com</a></div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.your_rights_paragraph3')}</div>
        <div className='legal-notice__title'>{Localizer.localize('privacy_policy.cookies_title')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.cookies_paragraph1')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.cookies_paragraph2')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.cookies_paragraph3')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.cookies_paragraph4')}</div>
        <div className='legal-notice__title'>{Localizer.localize('privacy_policy.security_title')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.security_paragraph')}</div>
        <div className='legal-notice__title'>{Localizer.localize('privacy_policy.applicable_law_title')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.applicable_law_paragraph1')}</div>
        <div className='legal-notice__paragraph'>{Localizer.localize('privacy_policy.applicable_law_paragraph2')}</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-address'>EGON PARIS</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-address'>{Localizer.localize('privacy_policy.address1')}</div>
        <div className='legal-notice__paragraph paragraph-center paragraph-address'>{Localizer.localize('privacy_policy.address2')}</div>
        <div className='legal-notice__paragraph paragraph-center'><a
          href='mailto:egon@egonparis.com'
          rel='noopener noreferrer'
          target='_blank'>egon@egonparis.com</a></div>
        <div className='legal-notice__paragraph'>
          <span>{Localizer.localize('privacy_policy.applicable_law_paragraph3')}</span>
          <a
            href='https://www.cnil.fr'
            rel='noopener noreferrer'
            target='_blank'>www.cnil.fr</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
