/* @flow */

import './NewsletterForm.scss';
import * as React from 'react';
import {useCallback, useRef} from 'react';
import {Localizer} from '../helpers/localizer';

type NewsletterFormProps = {
  +status: string,
  +subscribe: ({|EMAIL: string|}) => void
};

const renderStatus = (status) => {
  if (status === 'success') {
    // Subscribed
    return <div className='newsletter-form__status status-success'>{Localizer.localize('newsletter.subscribed')}</div>;
  } else if (status === 'error') {
    // Error
    return <div className='newsletter-form__status status-error'>{Localizer.localize('newsletter.error')}</div>;
  }

  return null;
};

const NewsletterForm = ({status, subscribe}: NewsletterFormProps): React.Node => {
  const inputRef = useRef();

  const submit = useCallback(() => {
    if (!inputRef || !inputRef.current) {
      return;
    }

    const {current: {value}} = inputRef;

    if (value.indexOf('@') === -1) {
      // Invalid e-mail address
      return;
    }

    subscribe({EMAIL: value});
  }, [inputRef, subscribe]);


  const handleInputOnKeyUp = useCallback((event) => {
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
