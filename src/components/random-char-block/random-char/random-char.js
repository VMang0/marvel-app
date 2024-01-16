import React from 'react';

import './random-char.scss';

const RandomChar = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;
  const objectFit = thumbnail.split('/').includes('image_not_available.jpg') ? 'contain' : 'cover';
  return (
    <div className="randomChar">
      <img src={thumbnail} alt={`${name} character`} style={{ objectFit }}/>
      <div className="randomChar__info">
        <p className="randomChar__info__charname">{name}</p>
        <p className="randomChar__info__details">
          {description}
        </p>
        <div className="randomChar__info__btns">
          <a href={homepage}
             aria-label='Go to homepage'
             className="button button__main button__light">
            <div className='inner'>Homepage</div>
          </a>
          <a href={wiki}
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