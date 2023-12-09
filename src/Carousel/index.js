import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import style from './Carousel.module.scss';

import delivery from './Delivery.svg';
import Sprout from './Sprout.svg';
import Purchase from './Purchase.svg';
import Checkmark from './Checkmark--outline.svg';

// import required modules
import { Pagination, Navigation,EffectFlip } from 'swiper/modules';

function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}

        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40,

          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation,EffectFlip]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={style.block}>
            <img src={delivery} alt="" />
            <h1>На следующий день стандартно</h1>
            <p>Сделайте заказ до 15:00 и получите свой заказ на следующий день в стандартной комплектации.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.block}>
            <img src={Checkmark} alt="" />
            <h1>Сделано настоящими мастерами</h1>
            <p>Товары ручной работы, изготовленные с настоящей страстью и мастерством</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.block}>
            <img src={Purchase} alt="" />
            <h1>Непревзойденные цены</h1>
            <p>За наши материалы и качество лучшей цены вы не найдете нигде.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.block}>
            <img src={Sprout} alt="" />
            <h1>Переработанная упаковка</h1>
            <p>Мы используем 100% переработанные материалы, чтобы обеспечить более управляемый след.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.block}>
            <img src={delivery} alt="" />
            <h1>На следующий день стандартно</h1>
            <p>Сделайте заказ до 15:00 и получите свой заказ на следующий день в стандартной комплектации.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.block}>
            <img src={Checkmark} alt="" />
            <h1>Сделано настоящими мастерами</h1>
            <p>Товары ручной работы, изготовленные с настоящей страстью и мастерством</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.block}>
            <img src={Purchase} alt="" />
            <h1>Непревзойденные цены</h1>
            <p>За наши материалы и качество лучшей цены вы не найдете нигде.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.block}>
            <img src={Sprout} alt="" />
            <h1>Переработанная упаковка</h1>
            <p>Мы используем 100% переработанные материалы, чтобы обеспечить более управляемый след.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;