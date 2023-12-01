import React from 'react';
import { Link } from 'react-router-dom';
import CartEmptyImg from '../assets/img/empty-cart.png'

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <icon>😕</icon>
        </h2>
        <p>
          Вероятней всего, вы нечего не заказывали.
          <br />
          Для того, чтобы заказать, перейди на главную страницу.
        </p>
        <img src={CartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
