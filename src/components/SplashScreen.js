import './SplashScreen.scss';
import * as React from 'react';
import {useEffect, useRef} from 'react';
import logo from '../assets/svg/logo-white.svg';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const SPLASH_SCREEN_TIMEOUT = 1500;

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
      <img
        alt='Logo Egon Paris'
        src={logo} />
    </div>
  );
};

export default SplashScreen;
