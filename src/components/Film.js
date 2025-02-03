/* @flow */

import './Film.scss';
import * as React from 'react';
import { useCallback, useRef } from 'react';
import { Localizer } from '../helpers/localizer';
import horizontalFilm from '../assets/videos/egon-film-horizontal.mp4';
import soundOff from '../assets/images/sound-off.png';
import soundOn from '../assets/images/sound-on.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import verticalFilm from '../assets/videos/egon-film-vertical.mp4';

const SKIP_BUTTON_BOTTOM_MARGIN = 50;

const Film = (): React.Node => {
  const navigate = useNavigate();
  const languageRef = useRef(useSelector((state) => state.language));
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isMuted, setIsMuted] = React.useState(true);

  const goToHome = useCallback(() => {
    navigate(`/${languageRef.current}/home`);
  }, [navigate]);

  const showSkipButton = useCallback((event: SyntheticEvent<>) => {
    const { currentTarget } = event;

    if (buttonRef.current !== null) {
      const btn: HTMLButtonElement = buttonRef.current;
      const videoHeight = ((currentTarget: any): HTMLElement).offsetHeight;
      const top = Math.min(window.innerHeight, videoHeight) - SKIP_BUTTON_BOTTOM_MARGIN;
      btn.style.top = `${top}px`;
      btn.classList.add('visible');
    }
  }, []);

  const toggleSound = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <div className='film'>
      <video
        autoPlay
        muted={isMuted}
        onCanPlay={showSkipButton}
        onEnded={goToHome}
        playsInline
        preload='auto'>
        <source
          media='(orientation: landscape)'
          src={horizontalFilm}
          type='video/mp4' />
        <source
          media='(orientation: portrait)'
          src={verticalFilm}
          type='video/mp4' />
        Video not supported
      </video>
      <button
        className='skip'
        onClick={goToHome}
        ref={buttonRef}
        type='button'>{Localizer.localize('film.skip_intro')}</button>
      <button
        className='sound'
        onClick={toggleSound}
        type='button'>
        <img
          alt={isMuted ? 'Activer le son' : 'Couper le son'}
          src={isMuted ? soundOff : soundOn} />
      </button>
    </div>
  );
};

export default Film;
