/* @flow */

import './Egon.scss';
import * as React from 'react';
import type {ModeType} from '../types/index';

type EgonProps = {|
  +mode: ModeType
|};

const Menu = ({mode}: EgonProps): React.Node => (
  <div className={`egon ${mode.toLowerCase()}`}>EGON</div>
);

export default Menu;
