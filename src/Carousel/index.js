import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.scss';

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
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,

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
          <div>
            <img src={delivery} alt="" />
            <h1>Next day as standard</h1>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Checkmark} alt="" />
            <h1>Made by true artisans</h1>
            <p>Handmade crafted goods made with real passion and craftmanship</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Purchase} alt="" />
            <h1>Unbeatable prices</h1>
            <p>For our materials and quality you won’t find better prices anywhere</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Sprout} alt="" />
            <h1>Recycled packaging</h1>
            <p>We use 100% recycled to ensure our footprint is more manageable</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={delivery} alt="" />
            <h1>Next day as standard</h1>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Checkmark} alt="" />
            <h1>Made by true artisans</h1>
            <p>Handmade crafted goods made with real passion and craftmanship</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Purchase} alt="" />
            <h1>Unbeatable prices</h1>
            <p>For our materials and quality you won’t find better prices anywhere</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Sprout} alt="" />
            <h1>Recycled packaging</h1>
            <p>We use 100% recycled to ensure our footprint is more manageable</p>
          </div>
        </SwiperSlide>



      </Swiper>
    </>
  );
}

export default Carousel;