/* @flow */

import './Menu.scss';
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {HashLink} from 'react-router-hash-link';
import {Localizer} from '../helpers/localizer';
import Social from './Social';
import {useSelector} from 'react-redux';
import x from '../assets/svg/x.svg';

const TWO = 2;

const renderHeader = (handleCloseOnClick) => (
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
);

const scroll = (el) => el.scrollIntoView({
  behavior: 'smooth',
  block: 'center'
});

const renderLinks = (language, expandedStates, toggleSection) => (
  <nav className='menu__links'>
    <div
      className='menu__item_toggle'
      data-index={0}
      onClick={toggleSection}>{Localizer.localize('menu.agency.label')}</div>
    <div className={`menu__item_accordion ${expandedStates[0] ? 'expanded' : ''}`}>
      <HashLink
        scroll={scroll}
        to={`/${language}/home#first-name`}>{Localizer.localize('menu.agency.first_name')}</HashLink>
      <HashLink
        scroll={scroll}
        to={`/${language}/home#philosophy`}>{Localizer.localize('menu.agency.philosophy')}</HashLink>
      <HashLink
        scroll={scroll}
        to={`/${language}/home#manifest`}>{Localizer.localize('menu.agency.manifest')}</HashLink>
      <HashLink
        scroll={scroll}
        to={`/${language}/home#founder`}>{Localizer.localize('menu.agency.founder')}</HashLink>
    </div>
    <div
      className='menu__item_toggle'
      data-index={1}
      onClick={toggleSection}>{Localizer.localize('menu.expertises.label')}</div>
    <div className={`menu__item_accordion ${expandedStates[1] ? 'expanded' : ''}`}>
      <HashLink
        scroll={scroll}
        to={`/${language}/expertises#strategy`}>{Localizer.localize('menu.expertises.strategy')}</HashLink>
      <HashLink
        scroll={scroll}
        to={`/${language}/expertises#creation`}>{Localizer.localize('menu.expertises.creation')}</HashLink>
      <HashLink
        scroll={scroll}
        to={`/${language}/expertises#digital`}>{Localizer.localize('menu.expertises.digital')}</HashLink>
      <HashLink
        scroll={scroll}
        to={`/${language}/expertises#edition`}>{Localizer.localize('menu.expertises.edition')}</HashLink>
      <HashLink
        scroll={scroll}
        to={`/${language}/expertises#production`}>{Localizer.localize('menu.expertises.production')}</HashLink>
    </div>
    <div
      className='menu__item_toggle'
      data-index={2}
      onClick={toggleSection}>{Localizer.localize('menu.creation.label')}</div>
    <div className={`menu__item_accordion ${expandedStates[TWO] ? 'expanded' : ''}`}>
      <HashLink
        scroll={scroll}
        to={`/${language}/creation#projects`}>{Localizer.localize('menu.creation.projects')}</HashLink>
      <HashLink
        scroll={scroll}
        to={`/${language}/creation#customers`}>{Localizer.localize('menu.creation.customers')}</HashLink>
    </div>
    <HashLink
      className='menu__item'
      smooth
      to={`/${language}/contact`}>{Localizer.localize('menu.contact.label')}</HashLink>
  </nav>
);

const renderFooter = (language, languageOnChange) => (
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
);

const Menu = (): React.Node => {
  const language = useSelector((state) => state.language);

  const [isOpen, setIsOpen] = useState(false);
  const [expandedStates, setExpandedStates] = useState([false, false, false]);

  const toggleSection = useCallback((event) => {
    const {target} = event;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const index = Number(target.getAttribute('data-index'));
    const newStates = [...expandedStates];
    newStates[index] = !newStates[index];
    setExpandedStates(newStates);
  }, [expandedStates, setExpandedStates]);

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
      {renderHeader(handleCloseOnClick)}
      {renderLinks(language, expandedStates, toggleSection)}
      {renderFooter(language, languageOnChange)}
    </div>
  );
};

export default Menu;
