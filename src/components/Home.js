/* @flow */

import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Localizer} from '../helpers/localizer';
import logo from '../assets/logo.svg';
import {setLanguage} from '../redux/actions';
import {useCallback} from 'react';

const Home = (): React.Node => {
  const dispatch = useDispatch();

  const language = useSelector((state) => state.language);

  const languageOnChange = useCallback((event) => {
    const {target: {value}} = event;
    // eslint-disable-next-line no-console
    console.log(value);
    dispatch(setLanguage(value));
  }, []);

  return (
    <div className='app'>
      <header className='app-header'>
        <img
          alt='logo'
          className='app-logo'
          src={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{Localizer.localize('egon.foo', {test: 'teeeeest'})}</div>
        <div>{Localizer.localize('egon.bar')}</div>
        <a
          className='app-link'
          href='https://reactjs.org'
          rel='noopener noreferrer'
          target='_blank'>Learn React</a>
        <div>
          <input
            checked={language === 'fr'}
            id='lang-fr'
            name='language'
            onChange={languageOnChange}
            type='radio'
            value='fr' />
          <label htmlFor='lang-fr'>Fr</label>
          <input
            checked={language === 'en'}
            id='lang-en'
            name='language'
            onChange={languageOnChange}
            type='radio'
            value='en' />
          <label htmlFor='lang-en'>En</label>
        </div>
      </header>
    </div>
  );
};

export default Home;
