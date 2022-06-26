import './SplashScreen.scss';
import * as React from 'react';
import logo from '../assets/logo.svg';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const SPLASH_SCREEN_TIMEOUT = 2000;

const SplashScreen = () => {
  const navigate = useNavigate();
  const language = useSelector((state) => state.language);

  // Initialization
  useEffect(() => {
    setTimeout(() => {
      navigate(`/${language}/home`);
    }, SPLASH_SCREEN_TIMEOUT);
  }, []);

  return (
    <div className='splash-screen'>
      <header className='splash-screen__header'>
        <img
          alt='logo'
          className='splash-screen__logo'
          src={logo} />
      </header>
    </div>
  );
};

export default SplashScreen;
