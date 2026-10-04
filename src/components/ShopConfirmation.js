/* @flow */

import './ShopConfirmation.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useSelector } from 'react-redux';

const ShopConfirmation = (): React.Node => {
  useSelector((state) => state.language);

  return (
    <div
      className='page page-shop-confirmation'
      id='top'>
      <Header />

      <div className='page-shop-confirmation__content'>
        <div>Merci !</div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopConfirmation;
