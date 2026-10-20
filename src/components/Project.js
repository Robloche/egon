/* @flow */

import './Project.scss';
import * as React from 'react';
import Footer from './Footer';
import { HashLink } from 'react-router-hash-link';
import Header from './Header';
import { Localizer } from '../helpers/localizer';
import ProjectChateauMontrose from './ProjectChateauMontrose';
import ProjectMoet from './ProjectMoet';
import ProjectRelaisChateaux from './ProjectRelaisChateaux';
import { useParams } from 'react-router-dom';
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
  const { name } = useParams();

  return (
    <div
      className='page page-project'
      id='top'>
      <Header />
      {Projects[name]}
      <HashLink
        className='underlined'
        to={`/${language}/references#top`}>{Localizer.localize('references.projects.common.discover_all_projects')}</HashLink>
      <Footer />
    </div>
  );
};

export default Project;
