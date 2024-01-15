import React from 'react';
import './char-card.scss';
import abyss from '../../resources/img/abyss.jpg';

const CharCard = () => {
  return (
    <li className="char__item">
      <img src={abyss} alt="CHANGE"/>
      <p className='char__item__name'>Adam Warlock</p>
    </li>
  );
};

export default CharCard;