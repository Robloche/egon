/* @flow */

import './Project.scss';
import * as React from 'react';
import Footer from './Footer';
import {HashLink} from 'react-router-hash-link';
import Header from './Header';
import {Localizer} from '../helpers/localizer';
import ProjectMoet from './ProjectMoet';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Projects = Object.freeze({
  moet: <ProjectMoet />
});

const Project = (): React.Node => {
  const language = useSelector((state) => state.language);
  const {name} = useParams();

  return (
    <div
      className='page page-project'
      id='top'>
      <Header />
      {Projects[name]}
      <HashLink
        className='underlined'
        to={`/${language}/creation/#projects`}>{Localizer.localize('creation.projects.common.discover_all_projects')}</HashLink>
      <Footer />
    </div>
  );
};

export default Project;
