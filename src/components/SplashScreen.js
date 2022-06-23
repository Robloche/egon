import './SplashScreen.scss';
import * as React from 'react';
import logo from '../assets/logo.svg';
import {setSplashScreenShown} from '../redux/actions';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

const SPLASH_SCREEN_TIMEOUT = 2000;

const SplashScreen = () => {
  const dispatch = useDispatch();

  // Initialization
  useEffect(() => {
    setTimeout(() => {
      dispatch(setSplashScreenShown());
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
