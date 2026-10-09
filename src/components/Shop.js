/* @flow */

import './Shop.scss';
import * as React from 'react';
import { useCallback, useEffect } from 'react';
import Bullet from './Bullet';
import Footer from './Footer';
import Header from './Header';
import { Localizer } from '../helpers/localizer';
import StripeBuyButton from './StripeBuyButton';
import azelina1 from '../assets/images/shop/azelina_151.png';
import azelina2 from '../assets/images/shop/azelina_211.png';
import azelina3 from '../assets/images/shop/azelina_316.png';
import azelina4 from '../assets/images/shop/azelina_421.png';
import bookBackCover from '../assets/images/shop/book-back-cover_400.png';
import bookCover from '../assets/images/shop/book-cover_400.png';
import drawing1 from '../assets/images/shop/drawing_190.png';
import drawing2 from '../assets/images/shop/drawing_379.png';
import drawing3 from '../assets/images/shop/drawing_569.png';
import drawing4 from '../assets/images/shop/drawing_758.png';
import { useSelector } from 'react-redux';

const PAGE_WIDTH_THRESHOLD = 500;

const Shop = (): React.Node => {
  useSelector((state) => state.language);

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [windowWidth, setWindowWidth] = React.useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBulletOnClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const covers = [bookCover, bookBackCover];

  return (
    <div
      className='page page-shop'
      id='top'>
      <Header />

      <div className='page-shop__section page-shop__book'>
        <div className='page-shop__background' />
        <div className='page-shop__description'>
          <div className='page-shop__title'>{Localizer.localize('shop.part_1.title')}</div>
          <div className='page-shop__author'>{Localizer.localize('shop.part_1.author')}</div>
          <div className='page-shop__foreword'>{Localizer.localize('shop.part_1.foreword')}</div>
          <div className='page-shop__synopsis'>{Localizer.localize('shop.part_1.synopsis')}</div>
          <div className='page-shop__tagline'>{Localizer.localize('shop.part_1.tagline')}</div>
          <div className='page-shop__buy-wrapper'>
            <div className='page-shop__price'>17&nbsp;€</div>
            <StripeBuyButton isLight={windowWidth > PAGE_WIDTH_THRESHOLD} />
          </div>
        </div>
      </div>

      <div className='page-shop__section page-shop__teasing'>
        <div className='page-shop__teasing-wrapper'>
          <div className='page-shop__teasing-title'>{Localizer.localize('shop.part_2.title')}</div>
          <div>{Localizer.localize('shop.part_2.text')}</div>
        </div>
        <div className='page-shop__foreword-wrapper'>
          <div>{Localizer.localize('shop.part_2.foreword_citation')}</div>
          <div>{Localizer.localize('shop.part_2.foreword_author')}</div>
        </div>
      </div>

      <div className='page-shop__section page-shop__author-section'>
        <div className='page-shop__photo-wrapper'>
          <img
            alt="Photo d'Azélina Jaboulet-Vercherre"
            sizes='(max-width: 600px) 151px, (max-width: 900px) 211px, (max-width: 1400px) 316px, 421px'
            src={azelina4}
            srcSet={`${azelina1} 151w, ${azelina2} 211w, ${azelina3} 316w, ${azelina4} 421w`} />
          <img
            alt=''
            sizes='(max-width: 600px) 190px, (max-width: 900px) 379px, (max-width: 1400px) 569px, 758px'
            src={drawing4}
            srcSet={`${drawing1} 190w, ${drawing2} 379w, ${drawing3} 569w, ${drawing4} 758w`} />
        </div>
        <div className='page-shop__about'>
          <div className='page-shop__about_title'>{Localizer.localize('shop.part_3.about_author')}</div>
          <div className='page-shop__about_bio'>{Localizer.localize('shop.part_3.author_bio')}</div>
        </div>
      </div>

      <div className='page-shop__section page-shop__book-egon-editions'>
        <div className='page-shop__book-cover-details'>
          <div className='book-cover-wrapper'>
            <img
              alt=''
              src={covers[currentIndex]} />
            <div className='book-cover__carousel'>
              <Bullet
                index={0}
                isFull={currentIndex === 0}
                isLight={false}
                onClick={handleBulletOnClick} />
              <Bullet
                index={1}
                isFull={currentIndex === 1}
                isLight={false}
                onClick={handleBulletOnClick} />
            </div>
          </div>
          <div className='page-shop__book-details'>
            <div className='book-details__title'>{Localizer.localize('shop.part_4.the_book')}</div>
            <div className='book-details__info'>{Localizer.localize('shop.part_4.book_details')}</div>
            <div className='book-details__tagline'>{Localizer.localize('shop.part_4.read_offer_share')}</div>
            <div className='book-details__price'>17&nbsp;€</div>
            <StripeBuyButton isLight={false} />
          </div>
        </div>
        <div className='page-shop__egon-table'>
          <div className='egon-table__title'>{Localizer.localize('shop.part_4.egon_table_title')}</div>
          <div className='egon-table__paragraph'>{Localizer.localize('shop.part_4.egon_table_paragraph1')}</div>
          <div className='egon-table__paragraph'>{Localizer.localize('shop.part_4.egon_table_paragraph2')}</div>
          <div
            className='egon-table__paragraph final-paragraph'>{Localizer.localize('shop.part_4.egon_table_paragraph3')}</div>
        </div>
      </div>

      <div className='page-shop__section page-shop__book-zoom' />

      <Footer />
    </div>
  );
};

export default Shop;
