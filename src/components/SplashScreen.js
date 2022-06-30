import './SplashScreen.scss';
import * as React from 'react';
import {useEffect, useRef} from 'react';
import egon from '../assets/images/egon-animation.gif';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const SPLASH_SCREEN_TIMEOUT = 2500;

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
        className='splash-screen__logo'
        src={egon} />
    </div>
  );
};

export default SplashScreen;
