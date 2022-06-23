/* @flow */

import './Menu.scss';
import * as React from 'react';
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Localizer} from '../helpers/localizer';
import {setLanguage} from '../redux/actions';

const Menu = (): React.Node => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language);

  // Initialization
  useEffect(() => {
    if (Localizer.language !== language) {
      // Language in store does not reflect language in Localizer
      dispatch(setLanguage(Localizer.language));
    }
  }, []);

  const languageOnChange = useCallback((event) => {
    const {target: {value}} = event;
    dispatch(setLanguage(value));
    Localizer.changeLanguage(value);
  }, []);

  return (
    <div className='menu'>
      <nav>
        <div>
          <Link to={`/${language}`}>Home</Link>
        </div>
        <div>
          <Link to={`/${language}/contact`}>Contact</Link>
        </div>
        <div>
          <Link to={`/${language}/test`}>Test</Link>
        </div>
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
