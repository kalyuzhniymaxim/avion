import React from 'react';

function SignUp() {
  const TOKEN = "6566635638:AAFokwBsQ-s1BUkUix58MRnsfPibd1I2Vy8";
const CHAT_ID = "-1001956716955";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`



  
  return (
    <form>
      <label>
        Ваше имя:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Ваш телефон:
        <input type="tel" name="phone" />
      </label>
      <br />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default SignUp;
