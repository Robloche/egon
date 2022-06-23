/* @flow */

import './Home.scss';
import * as React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import {Localizer} from '../helpers/localizer';
import SplashScreen from './SplashScreen';
import {useSelector} from 'react-redux';

const Home = (): React.Node => {
  useSelector((state) => state.language);
  const isSplashScreenShown = useSelector((state) => state.isSplashScreenShown);

  if (!isSplashScreenShown) {
    return <SplashScreen />;
  }

  return (
    <div className='home'>
      <Carousel />
      <div>{Localizer.localize('hello')}</div>
      <Footer />
    </div>
  );
};

export default Home;
