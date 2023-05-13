/* @flow */

import './NewsletterForm.scss';
import * as React from 'react';
import {useCallback, useRef} from 'react';
import {Localizer} from '../helpers/localizer';

type DefaultProps = {|
  // eslint-disable-next-line react/require-default-props
  +message?: string,
|};

export type NewsletterFormProps = {|
  ...DefaultProps,
  +status: string,
  +subscribe: ({| EMAIL: string |}) => void
|};

const renderStatus = (status: string) => {
  if (status === 'success') {
    // Subscribed
    return <div className='newsletter-form__status status-success'>{Localizer.localize('newsletter.subscribed')}</div>;
  } else if (status === 'error') {
    // Error
    return <div className='newsletter-form__status status-error'>{Localizer.localize('newsletter.error')}</div>;
  }

  return null;
};

// eslint-disable-next-line no-unused-vars
const NewsletterForm = ({message = '', status, subscribe}: NewsletterFormProps): React.Node => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const submit = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    const {current: {value}} = inputRef;

    if (value.indexOf('@') === -1) {
      // Invalid e-mail address
      return;
    }

    subscribe({EMAIL: value});
  }, [inputRef, subscribe]);


  const handleInputOnKeyUp = useCallback((event: SyntheticKeyboardEvent<HTMLElement>) => {
    const {key} = event;

    if (key === 'Enter') {
      submit();
    }
  }, [submit]);

  return (
    <div className='newsletter-form'>
      <div className='newsletter-form__row'>
        <input
          onKeyUp={handleInputOnKeyUp}
          placeholder={Localizer.localize('newsletter.placeholder')}
          ref={inputRef}
          type='email' />
        <button
          disabled={status === 'sending'}
          onClick={submit}
          type='submit'>{Localizer.localize('newsletter.action.subscribe')}</button>
      </div>
      {renderStatus(status)}
    </div>
  );
};

export default NewsletterForm;
