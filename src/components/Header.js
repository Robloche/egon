/* @flow */

import './Header.scss';
import * as React from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import logo from '../assets/svg/logo.svg';
import {useSelector} from 'react-redux';

const Header = (): React.Node => {
  const language = useSelector((state) => state.language);

  return (
    <div className='header'>
      <Link to={`/${language}/home`}><img
        alt='Logo Egon Paris'
        draggable={false}
        src={logo} /></Link>
      <Menu />
    </div>
  );
};

export default Header;
