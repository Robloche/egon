/* @flow */

import './Contact.scss';
import * as React from 'react';
import Footer from './Footer';
import Header from './Header';

const Contact = (): React.Node => (
  <>
    <Header />
    <div className='contact'>Contact</div>
    <Footer />
  </>
);

export default Contact;
