import React from 'react';
import mjolnir from '../../resources/img/mjolnir.png';

import './random-char-block.scss'
import RandomChar from "./random-char/random-char";

const RandomCharBlock = () => {
  return (
    <div className="randomCharBlock">
      <RandomChar />
      <div className="randomCharBlock__static">
        <p className='randomCharBlock__static__title'>
          Random character for today!<br/>
          Do you want to get to know him better?
        </p>
        <p className='randomCharBlock__static__title'>
          Or choose another one
        </p>
        <button
          className="button button__main button__dark"
          aria-label='click to choose another character'>
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="Thor's Hammer and Captain America's Shield"/>
      </div>
    </div>
  );
};

export default RandomCharBlock;