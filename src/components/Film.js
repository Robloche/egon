/* @flow */

import './Film.scss';
import * as React from 'react';
import {useCallback, useRef} from 'react';
import {Localizer} from '../helpers/localizer';
import film from '../assets/videos/egon-film.mp4';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Film = (): React.Node => {
  const navigate = useNavigate();
  const languageRef = useRef(useSelector((state) => state.language));

  const goToHome = useCallback(() => {
    navigate(`/${languageRef.current}/home`)
  },[navigate]);

  return (
    <div className='film'>
      <video
        autoPlay
        onEnded={goToHome}
        playsInline
        src={film} />
      <button
        onClick={goToHome}
        type='button'>{Localizer.localize('film.skip_intro')}</button>
    </div>
  );
};

export default Film;
