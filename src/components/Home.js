/* @flow */

import './Home.scss';
import * as React from 'react';
import Carousel from './Carousel';
import Egon from './Egon';
import Footer from './Footer';
import {Localizer} from '../helpers/localizer';
import Menu from './Menu';
import {Mode} from '../types';
import {useSelector} from 'react-redux';
import {useState} from 'react';

const Home = (): React.Node => {
  useSelector((state) => state.language);
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState(Mode.Light);

  return (
    <>
      <Egon mode={mode} />
      <Menu mode={mode} />
      <div className='home'>
        <Carousel />
        <div>{Localizer.localize('hello')}</div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
