import './SplashScreen.scss';
import * as React from 'react';
import {useEffect, useRef} from 'react';
import logo from '../assets/logo.svg';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const SPLASH_SCREEN_TIMEOUT = 2000;

const SplashScreen = () => {
  const navigate = useNavigate();
  const languageRef = useRef();
  languageRef.current = useSelector((state) => state.language);

  // Initialization
  useEffect(() => {
    const splashScreenTimer = setTimeout(() => {
      navigate(`/${languageRef.current}/home`);
    }, SPLASH_SCREEN_TIMEOUT);

    return () => {
      clearTimeout(splashScreenTimer);
    };
  }, [navigate]);

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
