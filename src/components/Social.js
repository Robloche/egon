/* @flow */

import './Social.scss';
import * as React from 'react';
import instagram from '../assets/svg/instagram.svg';
import linkedIn from '../assets/svg/linkedin.svg';
import mail from '../assets/svg/mail.svg';

type SocialProps = {
  +className: string
};

const Social = ({className}: SocialProps): React.Node => (
  <div className={`social ${className}`}>
    <a
      href='https://www.instagram.com/severinebretonjoindieterle'
      rel='noopener noreferrer'
      target='_blank'>
      <img
        alt='Logo Instagram'
        draggable={false}
        src={instagram} />
    </a>
    <a
      href='https://www.linkedin.com/in/s%C3%A9verine-breton-join-di%C3%A9terle-64888b8'
      rel='noopener noreferrer'
      target='_blank'>
      <img
        alt='Logo LinkedIn'
        draggable={false}
        src={linkedIn} />
    </a>
    <a
      href='mailto:egon@egonparis.com'
      rel='noopener noreferrer'
      target='_blank'>
      <img
        alt='Logo e-mail'
        draggable={false}
        src={mail} />
    </a>
  </div>
);

export default Social;
