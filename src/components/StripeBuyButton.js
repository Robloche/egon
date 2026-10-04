/* @flow */

import './StripeBuyButton.scss';
import * as React from 'react';
import { Localizer } from '../helpers/localizer';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

type StripeBuyButtonProps = {
  +isLight: boolean,
};

const StripeBuyButton = ({ isLight }: StripeBuyButtonProps): React.Node => {
  useSelector((state) => state.language);

  const stripeLink = `${process.env.REACT_APP_STRIPE_PAYMENT_LINK ?? ''}?locale=${Localizer.language}`;

  return (
    <a
      className={clsx('stripe-buy-button', isLight ? 'stripe-buy-button__light' : 'stripe-buy-button__dark')}
      href={stripeLink}>{Localizer.localize('shop.buy')}</a>
  );
};

export default StripeBuyButton;
