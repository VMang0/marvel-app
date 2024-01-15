import React from 'react';
import thor from "../../../resources/img/thor.jpeg";

import './randon-char.scss';

const RandomChar = () => {
  return (
    <div className="randomCharBlock__dynamic">
      <img src={thor} alt='thor character' />
      <div className="randomCharBlock__dynamic__info">
        <p className="randomCharBlock__dynamic__info__charname">thor</p>
        <p className="randomCharBlock__dynamic__info__details">
          As the Norse God of thunder and lightning, Thor wields one of the greatest
          weapons ever made, the enchanted hammer Mjolnir. While others have described
          Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
        </p>
        <div className="randomCharBlock__dynamic__info__btns">
          <a href="/"
             aria-label='Go to homepage'
             className="button button__main button__light">
            <div className='inner'>Homepage</div>
          </a>
          <a href="/"
             aria-label='Go to wiki-page about character'
             className="button button__secondary button__light">
            <div className='inner'>Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;