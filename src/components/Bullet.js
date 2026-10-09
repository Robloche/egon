/* @flow */

import './Bullet.scss';
import * as React from 'react';
import clsx from 'clsx';
import { useCallback } from 'react';

/* eslint-disable react/require-default-props */
type BulletProps = {|
  +index: number,
  +isFull: boolean,
  +isLight?: boolean,
  +onClick: (index: number) => void
|};
/* eslint-enable react/require-default-props */

const Bullet = ({ index, isFull, isLight = true, onClick }: BulletProps): React.Node => {
  const handleOnClick = useCallback(() => onClick(index), [index, onClick]);

  return (
    <svg
      className={clsx('bullet', isLight ? 'light' : 'dark', isFull && 'full')}
      onClick={handleOnClick}
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'>
      <circle
        cx='50'
        cy='50'
        r='40' />
    </svg>
  );
};

export default Bullet;
