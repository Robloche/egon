/* @flow */

import './NewsletterPopup.scss';
import * as React from 'react';
import NewsletterForm, {type NewsletterFormProps} from './NewsletterForm';
import {Localizer} from '../helpers/localizer';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import ReactDOM from 'react-dom';
import {useEffect} from 'react';
import x from '../assets/svg/x.svg';

const url = 'https://egonparis.us10.list-manage.com/subscribe/post?u=68d12add1d548738f018f906c&amp;id=55752b85ec';

const formRender = ({message, status, subscribe}: NewsletterFormProps) => (
  <NewsletterForm
    message={message}
    status={status}
    subscribe={subscribe} />
);

type NewsletterPopupProps = {
  +hide: () => void,
  +isVisible: boolean
};

const NewsletterPopup = ({hide, isVisible}: NewsletterPopupProps): React.Node => {
  if (!isVisible) {
    return null;
  }

  useEffect(() => {
    // Allow modal closing via Escape
    const close = (event: SyntheticKeyboardEvent<HTMLElement>) => {
      if (event.key === 'Escape') {
        hide();
      }
    };

    window.addEventListener('keydown', close, {passive: true});
    return () => {
      window.removeEventListener('keydown', close, {passive: true});
    };
  }, [hide]);

  return ReactDOM.createPortal(
    <>
      <div className='modal__overlay' />
      <div
        aria-hidden
        aria-modal
        className='modal__wrapper'
        role='dialog'
        tabIndex={-1}>
        <div className='modal'>
          <div className='modal__image' />
          <img
            alt='Close button'
            aria-label='Close'
            className='modal__close-button'
            data-dismiss='modal'
            draggable={false}
            onClick={hide}
            src={x} />
          <div className='modal__header'>{Localizer.localize('newsletter.header')}</div>
          <div className='modal__content'>
            <MailchimpSubscribe
              render={formRender}
              url={url} />
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default NewsletterPopup;
