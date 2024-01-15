import React from 'react';
import CharCard from "../char-card/char-card";
import './char-cards-list.scss'

const CharCardsList = () => {
  return (
    <div className='char__list'>
      <ul className='char__grid'>
        {
          new Array(9).fill().map((_, index) => (
            <CharCard key={index} />
          ))
        }
      </ul>
      <button
        className="button button__main button__light button__long"
        aria-label='click to load more character'>
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharCardsList;