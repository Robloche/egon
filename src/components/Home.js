/* @flow */

import './Home.scss';
import * as React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Header from './Header';
import {useSelector} from 'react-redux';

const Home = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <>
      <Header />
      <div className='home'>
        <Carousel />
      </div>
      <Footer />
    </>
  );
};

export default Home;
