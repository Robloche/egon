/* @flow */

import './AnimatedText.scss';
import * as React from 'react';
import {Localizer} from '../helpers/localizer';
import {useInView} from 'react-intersection-observer';

/* eslint-disable react/require-default-props */
type DefaultProps = {|
  +children?: React.Node,
  +stringKey?: string
|};
/* eslint-enable react/require-default-props */

type AnimatedTextProps = {|
  ...DefaultProps,
  +classList: string,
  +direction: 'down' | 'up',
|};

const AnimatedText = ({
  children,
  classList,
  direction,
  stringKey
}: AnimatedTextProps): React.Node => {
  const {inView, ref} = useInView();

  return (
    <div
      className={`${classList} animated-text ${direction} ${inView ? 'visible' : 'hidden'}`}
      ref={ref}>{typeof stringKey !== 'undefined' ? Localizer.localize(stringKey) : children}</div>
  );
};

export default AnimatedText;
