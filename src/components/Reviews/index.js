import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './reviews.scss';

import delivery from './66.png';
import Sprout from './67.png';
import Purchase from './68.png';
import Checkmark from './69.png';

// import required modules
import { Pagination, Navigation, EffectFlip } from 'swiper/modules';

function Reviews() {
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
        modules={[Pagination, Navigation, EffectFlip]}
        className="mySwiper">
        <SwiperSlide>
          <div className="reviewsBlock">
            <img className="reviewsIMG" src={delivery} alt="" />
            <div>
              <h1>Елена</h1>
              <p>
              Долго выбирали диван, очень понравился по дизайну. Приятный серый цвет подойдёт под любой интерьер. Удобное спальное место. Доставку осуществили очень быстро.
                
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviewsBlock">
            <img className="reviewsIMG" src={Checkmark} alt="" />
            <div>
              <h1>Анна</h1>
              <p>
              Очень добротная кровать, не хлипкая! Друзья и родственники говорят что выглядит дорого, согласна с ними)
сборка понятная, цена низкая для такой кровати.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviewsBlock">
            <img className="reviewsIMG" src={Purchase} alt="" />
            <div>
              <h1>Кристина</h1>
              <p>
              Отличный товар, большой и качественный диван с системой аккордеон! Все очень понравилось, быстрая доставка и сборка в назначенное время. Сервис Avion очень порадовал. Ну а сам диван - это мечта, которая осуществилась!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="reviewsBlock">
            <img className="reviewsIMG" src={Sprout} alt="" />
            <div>
              <h1>Валентина</h1>
              <p>
              Лучше заказать к доставке и сборку. Мы ещё собираем, но уверенна, что будет очень удобно. И расцветка приятная, обивка мягкая и плотная, оттоманка средней жёсткости, ребёнку нравится.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviewsBlock">
            <img className="reviewsIMG" src={delivery} alt="" />
            <div>
            <h1>Елена</h1>
              <p>
              Долго выбирали диван, очень понравился по дизайну. Приятный серый цвет подойдёт под любой интерьер. Удобное спальное место. Доставку осуществили очень быстро.
                
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviewsBlock">
            <img className="reviewsIMG" src={Checkmark} alt="" />
            <div>
            <h1>Анна</h1>
              <p>
              Очень добротная кровать, не хлипкая! Друзья и родственники говорят что выглядит дорого, согласна с ними)
сборка понятная, цена низкая для такой кровати.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviewsBlock">
            <img className="reviewsIMG" src={Purchase} alt="" />
            <div>
            <h1>Кристина</h1>
              <p>
              Отличный товар, большой и качественный диван с системой аккордеон! Все очень понравилось, быстрая доставка и сборка в назначенное время. Сервис Avion очень порадовал. Ну а сам диван - это мечта, которая осуществилась!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="reviewsBlock">
            <img className="reviewsIMG" src={Sprout} alt="" />
            <div>
            <h1>Валентина</h1>
              <p>
              Лучше заказать к доставке и сборку. Мы ещё собираем, но уверенна, что будет очень удобно. И расцветка приятная, обивка мягкая и плотная, оттоманка средней жёсткости, ребёнку нравится.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Reviews;
