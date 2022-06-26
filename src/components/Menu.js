/* @flow */

import './Menu.scss';
import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Localizer} from '../helpers/localizer';
import {setLanguage} from '../redux/actions';

const Menu = (): React.Node => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language);

  // Initialization
  useEffect(() => {
    const onMouseUp = (event: MouseEvent) => {
      const {target} = event;

      if (target instanceof HTMLElement && !target.closest('.menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mouseup', onMouseUp);

    if (Localizer.language !== language) {
      // Language in store does not reflect language in Localizer
      dispatch(setLanguage(Localizer.language));
    }

    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  const languageOnChange = useCallback((event) => {
    const {target: {value}} = event;
    dispatch(setLanguage(value));
    Localizer.changeLanguage(value);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const menuOnClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) {
    return (
      <div
        className='menu menu__closed'
        onClick={menuOnClick}>{Localizer.localize('menu.label')}</div>
    );
  }

  return (
    <div className='menu menu__opened'>
      <nav>
        <Link to={`/${language}/home`}>{Localizer.localize('menu.home')}</Link>
        <Link to={`/${language}/expertise`}>{Localizer.localize('menu.expertise')}</Link>
        <Link to={`/${language}/contact`}>{Localizer.localize('menu.contact')}</Link>
      </nav>
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
          <label htmlFor={id}>{lang.toUpperCase()}</label>
        </React.Fragment>;
      })}</div>
    </div>
  );
};

export default Menu;
