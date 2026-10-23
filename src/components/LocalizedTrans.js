/* @flow */

import * as React from 'react';
import { Localizer } from '../helpers/localizer';
import { Trans } from 'react-i18next';

type LocalizedTransProps = {
  ...$Exact<React.ElementConfig<typeof Trans>>,
  +keyName: string,
  // eslint-disable-next-line react/require-default-props
  +options?: Record<string, mixed>,
};

const LocalizedTrans = ({
  keyName,
  options,
  ...props
}: LocalizedTransProps): React.Node => {
  const localizedString = Localizer.localize(keyName, options);

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Trans
      components={{ bold: <strong /> }}
      defaults={localizedString}
      i18nKey='this_key_will_never_exist'
      {...props} />
  );
};

export default LocalizedTrans;
