import React from 'react';
import './char-card.scss';

const CharCard = ({ char, onCharSelected, selected }) => {
  const { id, name, thumbnail } = char;
  const objectFit = thumbnail.split('/').includes('image_not_available.jpg') ? 'contain' : 'cover';
  const className = selected ? 'char__item_selected' : '';

  return (
    <li className={`char__item ${className}`}
        onClick={() => onCharSelected(id)}>
      <img src={ thumbnail } alt={`${name} character`} style={{ objectFit }} />
      <p className='char__item__name'>{ name }</p>
    </li>
  );
};

export default CharCard;