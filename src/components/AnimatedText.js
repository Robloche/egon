/* @flow */

import './AnimatedText.scss';
import * as React from 'react';
import {Localizer} from '../helpers/localizer';
import {useInView} from 'react-intersection-observer';

type AnimatedTextProps = {
  +classList: string,
  +direction: 'down' | 'up',
  +stringKey: string
};

const AnimatedText = ({classList, direction, stringKey}: AnimatedTextProps): React.Node => {
  const {inView, ref} = useInView();

  return (
    <div
      className={`${classList} animated-text ${direction} ${inView ? 'visible' : 'hidden'}`}
      ref={ref}>{Localizer.localize(stringKey)}</div>
  );
};

export default AnimatedText;
