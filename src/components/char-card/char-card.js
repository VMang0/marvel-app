import React from 'react';
import './char-card.scss';

const CharCard = ({ char, onCharSelected }) => {
  const { id, name, thumbnail } = char;
  const objectFit = thumbnail.split('/').includes('image_not_available.jpg') ? 'contain' : 'cover';
  return (
    <li className="char__item" onClick={() => onCharSelected(id)} >
      <img src={ thumbnail } alt={`${name} character`} style={{ objectFit }} />
      <p className='char__item__name'>{ name }</p>
    </li>
  );
};

export default CharCard;