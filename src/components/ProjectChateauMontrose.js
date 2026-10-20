/* @flow */

import './Project.scss';
import * as React from 'react';
import { Localizer } from '../helpers/localizer';
import { useSelector } from 'react-redux';

const renderHeader = () => (
  <div className='page-project__header'>
    <div className='project__introduction'>
      <div className='project__title'>{Localizer.localize('references.projects.moet.title')}</div>
      <div className='project__description-huge'>{Localizer.localize('references.projects.moet.description1')}</div>
      <div>{Localizer.localize('references.projects.moet.description2')}</div>
    </div>
  </div>
);

const ProjectChateauMontrose = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <>
      {renderHeader()}
    </>
  );
};

export default ProjectChateauMontrose;
