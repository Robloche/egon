/* @flow */

import './Menu.scss';
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Localizer} from '../helpers/localizer';
import Social from './Social';
import {useSelector} from 'react-redux';
import x from '../assets/svg/x.svg';

const Menu = (): React.Node => {
  const language = useSelector((state) => state.language);

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseOnClick = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  // Initialization
  useEffect(() => {
    // Close menu when user clicks outside it
    const onMouseUp = (event: MouseEvent) => {
      const {target} = event;

      if (target instanceof HTMLElement && !target.closest('.menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const languageOnChange = useCallback((event) => {
    const {target: {value}} = event;
    Localizer.changeLanguage(value);
  }, []);

  const menuOnClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) {
    return (
      <div
        className='menu menu__closed menu__label'
        onClick={menuOnClick}>{Localizer.localize('menu.label')}</div>
    );
  }

  return (
    <div className='menu menu__opened'>
      <div className='menu__header'>
        <img
          alt='Close button'
          className='close'
          draggable={false}
          onClick={handleCloseOnClick}
          src={x} />
        <div
          className='menu menu__closed menu__label'
          onClick={handleCloseOnClick}>{Localizer.localize('menu.label')}</div>
      </div>
      <nav className='menu__links'>
        <div className='menu__item_toggle'>{Localizer.localize('menu.agency.label')}</div>
        <div className='menu__item_accordion'>
          <Link to={`/${language}/home#first-name`}>{Localizer.localize('menu.agency.first_name')}</Link>
          <Link to={`/${language}/home#philosophy`}>{Localizer.localize('menu.agency.philosophy')}</Link>
          <Link to={`/${language}/home#manifest`}>{Localizer.localize('menu.agency.manifest')}</Link>
          <Link to={`/${language}/home#founder`}>{Localizer.localize('menu.agency.founder')}</Link>
        </div>
        <div className='menu__item_toggle'>{Localizer.localize('menu.expertises.label')}</div>
        <div className='menu__item_accordion'>
          <Link to={`/${language}/expertises#strategy`}>{Localizer.localize('menu.expertises.strategy')}</Link>
          <Link to={`/${language}/expertises#creation`}>{Localizer.localize('menu.expertises.creation')}</Link>
          <Link to={`/${language}/expertises#digital`}>{Localizer.localize('menu.expertises.digital')}</Link>
          <Link to={`/${language}/expertises#edition`}>{Localizer.localize('menu.expertises.edition')}</Link>
          <Link to={`/${language}/expertises#production`}>{Localizer.localize('menu.expertises.production')}</Link>
        </div>
        <div className='menu__item_toggle'>{Localizer.localize('menu.creation.label')}</div>
        <div className='menu__item_accordion'>
          <Link to={`/${language}/creation#projects`}>{Localizer.localize('menu.creation.projects')}</Link>
          <Link to={`/${language}/creation#customers`}>{Localizer.localize('menu.creation.customers')}</Link>
        </div>
        <Link
          className='menu__item'
          to={`/${language}/contact`}>{Localizer.localize('menu.contact.label')}</Link>
      </nav>
      <div className='menu__footer'>
        <Social className='menu__social' />
        <div className='menu__languages'>{Localizer.supportedLanguages.map((lang) => {
          const id = `lang-${lang}`;

          return <React.Fragment key={id}>
            <input
              checked={language === lang}
              id={id}
              name='language'
              onChange={languageOnChange}
              type='radio'
              value={lang} />
            <label htmlFor={id}>{Localizer.localize(`menu.language.${lang}`)}</label>
          </React.Fragment>;
        })}</div>
      </div>
    </div>
  );
};

export default Menu;
