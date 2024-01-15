import React from 'react';
import xMen from '../../resources/img/x-men.png';
import './comics-card.scss'

const ComicsCard = () => {
  return (
    <li className='comics__item'>
      <a href='/'>
        <img src={xMen} alt="#" />
        <p className='comics__item__name'>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</p>
        <p className='comics__item__price'>9.99$</p>
      </a>
    </li>
  );
};

export default ComicsCard;