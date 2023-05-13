/* @flow */

import './Header.scss';
import * as React from 'react';
import {HashLink} from 'react-router-hash-link';
import Menu from './Menu';
import logo from '../assets/svg/logo.svg';
import {useSelector} from 'react-redux';

const Header = (): React.Node => {
  const language = useSelector((state) => state.language);

  return (
    <div className='header'>
      <HashLink to={`/${language}/home#carousel-clients`}>
        <img
          alt='Logo Egon Paris'
          draggable={false}
          src={logo} />
      </HashLink>
      <Menu />
    </div>
  );
};

export default Header;
