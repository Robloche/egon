/* @flow */

import './Menu.scss';
import * as React from 'react';
import {useCallback, useState} from 'react';
import FocusLock from 'react-focus-lock';
import {HashLink} from 'react-router-hash-link';
import {Localizer} from '../helpers/localizer';
import {RemoveScroll} from 'react-remove-scroll';
import Social from './Social';
import {scrollTop} from '../helpers/scroll';
import {useSelector} from 'react-redux';
import x from '../assets/svg/x.svg';

const TWO = 2;

const renderHeader = (handleCloseOnClick: (event: SyntheticMouseEvent<HTMLElement> | SyntheticTouchEvent<HTMLElement>) => void) => (
  <div className='menu__header'>
    <button
      className='no-style-button close'
      type='button'>
      <img
        alt='Close button'
        draggable={false}
        onClick={handleCloseOnClick}
        src={x} />
    </button>
    <button
      className=' no-style-button '
      type='button'>
      <div
        className='menu menu__closed menu__label'
        onClick={handleCloseOnClick}>{Localizer.localize('menu.label')}</div>
    </button>
  </div>
);

const renderLinks = (
  language: string,
  expandedStates: Array<boolean>,
  toggleSection: (event: SyntheticMouseEvent<HTMLElement> | SyntheticTouchEvent<HTMLElement>) => void,
  handleCloseOnClick: () => void,
  handleOnFocus: (event: SyntheticKeyboardEvent<HTMLElement>) => void,
  handleCloseAll: () => void
) => (
  <nav className='menu__links'>
    <div
      className='menu__item_toggle'
      data-index={0}
      onClick={toggleSection}>{Localizer.localize('menu.agency.label')}</div>
    <div className={`menu__item_accordion ${expandedStates[0] ? 'expanded' : ''}`}>
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/home#first-name`}>{Localizer.localize('menu.agency.first_name')}</HashLink>
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/home#philosophy`}>{Localizer.localize('menu.agency.philosophy')}</HashLink>
      {/* <HashLink */}
      {/* DEBUG onClick={handleCloseOnClick} */}
      {/* DEBUG  scroll={scrollTop} */}
      {/* DEBUG  to={`/${language}/home#manifest`}>{Localizer.localize('menu.agency.manifest')}</HashLink> */}
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/home#founder`}>{Localizer.localize('menu.agency.founder')}</HashLink>
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/home#creative-director`}>{Localizer.localize('menu.agency.creative_director')}</HashLink>
    </div>
    <div
      className='menu__item_toggle'
      data-index={1}
      onClick={toggleSection}>{Localizer.localize('menu.expertises.label')}</div>
    <div className={`menu__item_accordion ${expandedStates[1] ? 'expanded' : ''}`}>
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/expertises#strategy`}>{Localizer.localize('menu.expertises.strategy')}</HashLink>
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/expertises#creation`}>{Localizer.localize('menu.expertises.creation')}</HashLink>
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/expertises#digital`}>{Localizer.localize('menu.expertises.digital')}</HashLink>
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/expertises#edition`}>{Localizer.localize('menu.expertises.edition')}</HashLink>
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/expertises#production`}>{Localizer.localize('menu.expertises.production')}</HashLink>
    </div>
    <div
      className='menu__item_toggle'
      data-index={2}
      onClick={toggleSection}>{Localizer.localize('menu.creation.label')}</div>
    <div className={`menu__item_accordion ${expandedStates[TWO] ? 'expanded' : ''}`}>
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/creation#projects`}>{Localizer.localize('menu.creation.projects')}</HashLink>
      <HashLink
        onClick={handleCloseOnClick}
        onFocus={handleOnFocus}
        scroll={scrollTop}
        to={`/${language}/creation#customers`}>{Localizer.localize('menu.creation.customers')}</HashLink>
    </div>
    <HashLink
      className='menu__item'
      onClick={handleCloseOnClick}
      onFocus={handleCloseAll}
      to={`/${language}/contact#top`}>{Localizer.localize('menu.contact.label')}</HashLink>
  </nav>
);

const renderFooter = (language: string, languageOnChange: (event: SyntheticInputEvent<HTMLElement>) => void) => (
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

  const toggleSection = useCallback((event: SyntheticMouseEvent<HTMLElement> | SyntheticTouchEvent<HTMLElement>) => {
    const {target} = event;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const index = Number(target.getAttribute('data-index'));
    const newStates = [false, false, false];
    newStates[index] = !expandedStates[index];
    setExpandedStates(newStates);
  }, [expandedStates]);

  const handleCloseOnClick = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleOnFocus = useCallback((event: SyntheticKeyboardEvent<HTMLElement>) => {
    const toggleElt = event.currentTarget.parentElement?.previousElementSibling;

    if (!toggleElt) {
      return;
    }

    const index = Number(toggleElt.getAttribute('data-index'));
    if (!expandedStates[index]) {
      const newStates = [false, false, false];
      newStates[index] = true;
      setExpandedStates(newStates);
    }
  }, [expandedStates]);

  const handleCloseAll = useCallback(() => {
    setExpandedStates([false, false, false]);
  }, []);

  const languageOnChange = useCallback((event: SyntheticInputEvent<HTMLElement>) => {
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
    <FocusLock returnFocus>
      <RemoveScroll>
        <div className='menu__wrapper'>
          <div
            className='menu__overlay'
            onClick={handleCloseOnClick} />
          <div
            aria-label='menu'
            aria-modal='true'
            className='menu menu__opened'
            role='dialog'>
            {renderHeader(handleCloseOnClick)}
            {renderLinks(language, expandedStates, toggleSection, handleCloseOnClick, handleOnFocus, handleCloseAll)}
            {renderFooter(language, languageOnChange)}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
};

export default Menu;
