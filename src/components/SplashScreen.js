import './SplashScreen.scss';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {PAGE_COUNT as CLIENTS_PAGE_COUNT} from './CarouselClients';
import {PAGE_COUNT as MANIFEST_PAGE_COUNT} from './CarouselManifest';
import frame1 from '../assets/images/egon-frame1.png';
import frame2 from '../assets/images/egon-frame2.png';
import frame3 from '../assets/images/egon-frame3.png';
import frame4 from '../assets/images/egon-frame4.png';
import frame5 from '../assets/images/egon-frame5.png';
import frame6 from '../assets/images/egon-frame6.png';
import frame7 from '../assets/images/egon-frame7.png';
import frame8 from '../assets/images/egon-frame8.png';
import {preloadCarouselImages} from '../helpers/preload';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

// Preload carousel images during startup animation
preloadCarouselImages('manifest', MANIFEST_PAGE_COUNT - 1);
preloadCarouselImages('clients', CLIENTS_PAGE_COUNT - 1);

// Duration splash screen stays visible (in ms)
const SPLASH_SCREEN_TIMEOUT = 3000;

// Duration splash screen fades out (in ms)
const SPLASH_SCREEN_FADE_TIMEOUT = 200;

const frames = Object.freeze([frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8]);

const SplashScreen = () => {
  const navigate = useNavigate();
  const languageRef = useRef(useSelector((state) => state.language));

  const [fadeOut, setFadeOut] = useState(false);

  // Initialization
  useEffect(() => {
    let fadeTimer = null;
    const splashScreenTimer = setTimeout(() => {
      setFadeOut(true);
      fadeTimer = setTimeout(() => {
        navigate(`/${languageRef.current}/home`);
      }, SPLASH_SCREEN_FADE_TIMEOUT);
    }, SPLASH_SCREEN_TIMEOUT);

    return () => {
      clearTimeout(splashScreenTimer);
      clearTimeout(fadeTimer);
    };
  }, [navigate, setFadeOut]);

  /* eslint-disable react/no-array-index-key */
  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className='image-container'>
        {frames.map((frame, index) => <img
          alt='Logo Egon Paris'
          key={index}
          src={frame} />)}
      </div>
    </div>
  );
  /* eslint-enable react/no-array-index-key */
};

export default SplashScreen;
