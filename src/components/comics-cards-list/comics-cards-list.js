import React from 'react';
import ComicsCard from "../comics-card/comics-card";
import './comics-cards-list.scss'

const ComicsCardsList = () => {
  return (
    <div className='comics__list'>
      <ul className='comics__grid'>
        {
          new Array(10).fill().map((_, index) => (
            <ComicsCard key={index} />
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

export default ComicsCardsList;