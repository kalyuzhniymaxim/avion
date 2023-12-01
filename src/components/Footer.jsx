import React from 'react';
import '../scss/app.scss';
import { Link } from 'react-router-dom';
import insta from '../assets/img/free-icon-instagram-2111463.png';
import viber from '../assets/img/free-icon-viber-3938039.png'
import vk from '../assets/img/free-icon-vk-5968835.png'
import whatsap from '../assets/img/free-icon-whatsapp-3536445.png'
import telegram from '../assets/img/photoeditorsdk-export-fotor-bg-remover-20230718135731.png'

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className='footer__title'>
        <p>© 2024 AVION - Все права защищены.</p>
      </div>
      <div className='footer__selector'>
        <Link to="https://instagram.com/kaily_nails?igshid=MTIzZWMxMTBkOA==">
          <img src={insta} alt="insta" />
        </Link>
        <Link to=" viber://chat?number=%2B79102230341">
          <img src={viber} alt="viber" />
        </Link>
        <Link to="https://t.me/yana_kaily">
          <img src={telegram} alt="telegram" />
        </Link>
        <Link to="https://vk.com/kaily_nails">
          <img src={vk} alt="vk" />
        </Link>
        <Link to="https://wa.me/79102230341">
          <img src={whatsap} alt="whatsap" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
