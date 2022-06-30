/* @flow */

import './Bullet.scss';
import * as React from 'react';
import {useCallback} from 'react';

type BulletProps = {
  +index: number,
  +isFull: boolean,
  +onClick: (index: number) => void
};

const Bullet = ({index, isFull, onClick}: BulletProps): React.Node => {
  const handleOnClick = useCallback(() => onClick(index), [index, onClick]);

  return (
    <svg
      className={`bullet ${isFull ? 'full' : ''}`}
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
