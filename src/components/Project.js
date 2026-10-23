/* @flow */

import './Project.scss';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Localizer } from '../helpers/localizer';
import ProjectChateauMontrose from './ProjectChateauMontrose';
import ProjectMoet from './ProjectMoet';
import ProjectRelaisChateaux from './ProjectRelaisChateaux';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

/* eslint-disable camelcase */
const Projects = Object.freeze({
  chateau_montrose: <ProjectChateauMontrose />,
  moet: <ProjectMoet />,
  relais_chateaux: <ProjectRelaisChateaux />,
});
/* eslint-enable camelcase */

const Project = (): React.Node => {
  const language = useSelector((state) => state.language);
  const navigate = useNavigate();
  const { name } = useParams();

  const goToReferences = useCallback(() => {
    navigate(`/${language}/references#top`);
  }, [language, navigate]);

  return (
    <div
      className='page page-project'
      id='top'>
      <Header />
      {Projects[name]}
      <button
        className='outlined-button'
        onClick={goToReferences}
        type='button'>{Localizer.localize('references.projects.common.discover_all_projects')}</button>
      <Footer />
    </div>
  );
};

export default Project;
