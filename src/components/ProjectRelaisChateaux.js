/* @flow */

import './Project.scss';
import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import { Localizer } from '../helpers/localizer';
import image1 from '../assets/images/projects/relais-et-chateaux/1-project-relais-chateaux.png';
import image2 from '../assets/images/projects/relais-et-chateaux/2-project-relais-chateaux.png';
import image3 from '../assets/images/projects/relais-et-chateaux/3-project-relais-chateaux.png';
import image4 from '../assets/images/projects/relais-et-chateaux/4-project-relais-chateaux.png';
import play from '../assets/svg/play.svg';
import projectRelaisChateaux from '../assets/videos/projects/relais-et-chateaux/video_1920_1080.mp4';
import { useSelector } from 'react-redux';

const renderHeader = () => (
  <div className='page-project__header'>
    <div className='project__introduction'>
      <div className='project__title'>{Localizer.localize('creation.projects.relais_chateaux.title')}</div>
      <div
        className='project__description-huge'>{Localizer.localize('creation.projects.relais_chateaux.subtitle2')}</div>
      <div>{Localizer.localize('creation.projects.relais_chateaux.description')}</div>
    </div>
  </div>
);

const renderStake = () => (
  <div className='project__stake'>
    <div className='project__stake-title'>{Localizer.localize('creation.projects.relais_chateaux.stake_title')}</div>
    <div>{Localizer.localize('creation.projects.relais_chateaux.stake_description')}</div>
  </div>
);

const renderShots = () => (
  <div className='project__four-shots'>
    <img
      alt=''
      sizes='296px'
      src={image1}
      srcSet={`${image1} 296w`} />
    <img
      alt=''
      sizes='296px'
      src={image2}
      srcSet={`${image2} 296w`} />
    <img
      alt=''
      sizes='296px'
      src={image3}
      srcSet={`${image3} 296w`} />
    <img
      alt=''
      sizes='296px'
      src={image4}
      srcSet={`${image4} 296w`} />
  </div>
);

const renderEnd = () => (
  <div className='project__end'>
    <div className='project__thanks'>{Localizer.localize('creation.projects.common.thanks')}</div>
    <div className='project__cast'>
      <span>{Localizer.localize('creation.projects.common.client')} @RelaisChâteaux</span>
    </div>
    <a
      className='project__contact'
      href='mailto:egon@egonparis.com'
      rel='noopener noreferrer'
      target='_blank'>{Localizer.localize('creation.projects.common.contact_us')}</a>
  </div>
);

const ProjectRelaisChateaux = (): React.Node => {
  useSelector((state) => state.language);
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideo = useCallback((videoElt: HTMLVideoElement) => {
    if (videoElt.paused) {
      setIsPaused(false);
      videoElt.play();
    } else {
      setIsPaused(true);
      videoElt.pause();
    }
  }, []);

  const handleButtonOnClick = useCallback(() => {
    if (!videoRef.current) {
      return;
    }

    toggleVideo(videoRef.current);
  }, [toggleVideo, videoRef]);

  const handleOverlayOnClick = useCallback(() => {
    if (!videoRef.current || isPaused) {
      return;
    }

    toggleVideo(videoRef.current);
  }, [isPaused, toggleVideo, videoRef]);

  return (
    <>
      {renderHeader()}
      <figure>
        <video
          loop
          preload='auto'
          ref={videoRef}
          src={projectRelaisChateaux} />
        <div
          className={`video__overlay ${isPaused ? '' : 'video__overlay-clickable'}`}
          onClick={handleOverlayOnClick}>
          {isPaused ? (
            <button
              onClick={handleButtonOnClick}
              type='button'>
              <img
                alt=''
                src={play} />
            </button>
          ) : null}
        </div>
      </figure>
      {renderStake()}
      {renderShots()}
      {renderEnd()}
    </>
  );
};

export default ProjectRelaisChateaux;
