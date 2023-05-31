/* @flow */

import './NewsletterPopup.scss';
import * as React from 'react';
import NewsletterForm, {type NewsletterFormProps} from './NewsletterForm';
import FocusLock from 'react-focus-lock';
import {Localizer} from '../helpers/localizer';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Portal from './Portal';
import useKeyUp from '../hooks/use-key-up';
import x from '../assets/svg/x.svg';

const url = 'https://egonparis.us10.list-manage.com/subscribe/post?u=68d12add1d548738f018f906c&amp;id=55752b85ec';

const formRender = ({message, status, subscribe}: NewsletterFormProps) => (
  <NewsletterForm
    message={message}
    status={status}
    subscribe={subscribe} />
);

type NewsletterPopupProps = {|
  +hide: () => void,
  +isVisible: boolean
|};

const NewsletterPopup = ({hide, isVisible}: NewsletterPopupProps): React.Node => {
  useKeyUp('Escape', hide);

  if (!isVisible) {
    return null;
  }

  return (
    <Portal>
      <FocusLock returnFocus>
        <div className='modal__wrapper'>
          <div
            className='modal__overlay'
            onClick={hide} />
          <div
            aria-hidden
            aria-modal
            className='modal'
            role='dialog'
            tabIndex={-1}>
            <div className='modal__image' />
            <button
              aria-label='Close'
              className='modal__close-button'
              data-dismiss='modal'
              onClick={hide}
              type='button'>
              <img
                alt='Close button'
                draggable={false}
                src={x} />
            </button>
            <div className='modal__header'>{Localizer.localize('newsletter.header')}</div>
            <div className='modal__content'>
              <MailchimpSubscribe
                render={formRender}
                url={url} />
            </div>
          </div>
        </div>
      </FocusLock>
    </Portal>
  );
};

export default NewsletterPopup;
