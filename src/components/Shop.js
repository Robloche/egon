/* @flow */

import './Shop.scss';
import * as React from 'react';

const Shop = (): React.Node => (
  <div className='shop'>
    <stripe-buy-button
      buy-button-id={process.env.REACT_APP_STRIPE_BUY_BUTTON_ID}
      publishable-key={process.env.REACT_APP_STRIPE_PUBLIC_KEY} />
  </div>
);

export default Shop;
