/* @flow */

import './NewsletterPopup.scss';
import * as React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import ReactDOM from 'react-dom';

const url = 'https://gmail.us17.list-manage.com/subscribe/post?u=84ff514b13118b016ef58f46b&amp;id=b8240a6326';

type NewsletterPopupProps = {
  +hide: () => void,
  +isVisible: boolean
};

const NewsletterPopup = ({hide, isVisible}: NewsletterPopupProps) => {
  if (!isVisible) {
    return null;
  }

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
          <button
            aria-label='Close'
            className='modal__close-button'
            data-dismiss='modal'
            onClick={hide}
            type='button'>
            <span aria-hidden='true'>&times;</span>
          </button>
          <div className='modal__header'>header</div>
          <div className='modal__content'>
            <MailchimpSubscribe url={url} />
          </div>
          <div className='modal__footer'>footer</div>
        </div>
      </div>
    </>
    ,
    document.body
  );
};

export default NewsletterPopup;
