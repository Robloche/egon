/* @flow */

import './EgonEditions.scss';
import * as React from 'react';
import Footer from './Footer';
import { HashLink } from 'react-router-hash-link';
import Header from './Header';
import LocalizedTrans from './LocalizedTrans';
import { Localizer } from '../helpers/localizer';
import bucketGlass from '../assets/images/egon-editions/bucket-glass_427.png';
import glasses from '../assets/images/egon-editions/glasses_427.png';
import pot from '../assets/images/egon-editions/pot_427.png';
import ruinartBook from '../assets/images/egon-editions/ruinart-book_427.png';
import ruinartBooks from '../assets/images/egon-editions/ruinart-books_427.png';
import seeView from '../assets/images/egon-editions/see-view_427.png';
import trees from '../assets/images/egon-editions/trees_427.png';
import { useSelector } from 'react-redux';
import vegetables from '../assets/images/egon-editions/vegetables_427.png';

const EgonEditions = (): React.Node => {
  const language = useSelector((state) => state.language);

  return (
    <div
      className='page page-egon-editions'
      id='top'>
      <Header />
      <div className='page-egon-editions__container'>
        <div className='egon-editions__title'>{Localizer.localize('egon_editions.title')}</div>
        <div className='egon-editions__subtitle'>{Localizer.localize('egon_editions.subtitle')}</div>
        {/* Section 1 */}
        <div className='egon-editions__section-title'>{Localizer.localize('egon_editions.section1.title')}</div>
        <div
          className='egon-editions__section-paragraph'>{Localizer.localize('egon_editions.section1.paragraph1')}</div>
        <div
          className='egon-editions__section-paragraph'>{Localizer.localize('egon_editions.section1.paragraph2')}</div>
        <div className='egon-editions__images-wrapper'>
          <img
            alt=''
            src={trees} />
          <img
            alt=''
            src={seeView} />
        </div>
        {/* Section 2 */}
        <div className='egon-editions__section-title'>{Localizer.localize('egon_editions.section2.title')}</div>
        <div
          className='egon-editions__section-paragraph'>{Localizer.localize('egon_editions.section2.paragraph1')}</div>
        <div
          className='egon-editions__section-paragraph'>{Localizer.localize('egon_editions.section2.paragraph2')}</div>
        <div
          className='egon-editions__section-paragraph'>{Localizer.localize('egon_editions.section2.paragraph3')}</div>
        <div
          className='egon-editions__section-paragraph closing'>{Localizer.localize('egon_editions.section2.closing')}</div>
        <div className='egon-editions__images-wrapper'>
          <img
            alt=''
            src={vegetables} />
          <img
            alt=''
            src={pot} />
        </div>
        {/* Section 3 */}
        <div className='egon-editions__section-title'>{Localizer.localize('egon_editions.section3.title')}</div>
        <div
          className='egon-editions__section-paragraph'>{Localizer.localize('egon_editions.section3.paragraph1')}</div>
        <div
          className='egon-editions__section-paragraph'><LocalizedTrans keyName='egon_editions.section3.paragraph2' />
        </div>
        <div
          className='egon-editions__section-paragraph'>{Localizer.localize('egon_editions.section3.paragraph3')}</div>
        <div className='egon-editions__images-wrapper'>
          <img
            alt=''
            src={glasses} />
          <img
            alt=''
            src={bucketGlass} />
        </div>
        <div className='egon-editions__images-wrapper'>
          <img
            alt=''
            src={ruinartBooks} />
          <img
            alt=''
            src={ruinartBook} />
        </div>
        {/* Last book */}
        <div className='egon-editions__label'>{Localizer.localize('egon_editions.last_book.label')}</div>
        <div className='egon-editions__section-paragraph'><LocalizedTrans keyName='egon_editions.last_book.content' />
        </div>
        <HashLink
          className='underlined'
          to={`/${language}/shop#top`}>{Localizer.localize('egon_editions.last_book.link')}</HashLink>
        {/* Last section */}
        <div className='egon-editions__label'>{Localizer.localize('egon_editions.last_section.label')}</div>
        <div className='egon-editions__section-paragraph'><LocalizedTrans
          keyName='egon_editions.last_section.content' /></div>
        <a
          className='underlined'
          href='mailto:egon@egonparis.com'
          rel='noopener noreferrer'
          target='_blank'>{Localizer.localize('egon_editions.last_section.link')}</a>
      </div>
      <Footer />
    </div>
  );
};

export default EgonEditions;
