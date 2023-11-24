// import styles from './Carousel.module.scss';


import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss'

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    // centerPadding: "60px",
    className: "center"
  };
  return (
    <div className='cardd'>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <div className='card'>
            <h3>1</h3>
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, minima.</p>
          </div>
          <div className='card'>
            <h3>2</h3>
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, minima.</p>
          </div>
          <div className='card'>
            <h3>3</h3>
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, minima.</p>
          </div>
          <div className='card'>
            <h3>4</h3>
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, minima.</p>
          </div>
          <div className='card'>
            <h3>5</h3>
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, minima.</p>
          </div>
          <div className='card'>
            <h3>6</h3>
            <h1>Lorem, ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, minima.</p>
          </div>
        </Slider>
      </div>
  );
}

export default Carousel;
