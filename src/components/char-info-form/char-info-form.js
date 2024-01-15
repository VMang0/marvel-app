import React from 'react';
import './char-info-form.scss';
import thor from '../../resources/img/thor.jpeg';


const CharInfoForm = () => {
  return (
    <div className='char__info'>
      <div className="char__info__base">
        <img src={thor} alt="infoIMG"/>
        <div className='char__info__base__layout'>
          <p className="char__info__base__name">Loki</p>
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
      <p className="char__info__description">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey,
        and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel,
        the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to
        the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
      </p>
      <h3>Comics:</h3>
      <div className="char__info__comics__list">
        <ul className="char__info__comics__grid">
          {
            new Array(10).fill().map((_, index) => (
              <li className="char__info__comics__item" key={index}>
                AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default CharInfoForm;