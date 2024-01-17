import React from "react";

const CharInfo = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  const objectFit = thumbnail.split('/').includes('image_not_available.jpg') ? 'contain' : 'cover';

  const CharListContent = () => {
    if (comics.length > 0) {
      return (
        <ul className="char__info__comics__grid">
          {
            comics.map((item, index) => (
              <li className="char__info__comics__item" key={index}>
                { item.name }
              </li>
            ))
          }
        </ul>
      )
    } else {
      return 'Comics not found'
    }
  }

  return (
    <>
      <div className="char__info__base">
        <img src={thumbnail} alt="infoIMG" style={{ objectFit }}/>
        <div className='char__info__base__layout'>
          <p className="char__info__base__name">{ name }</p>
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
      <p className="char__info__description">{ description }</p>
      <h3>Comics:</h3>
      <div className="char__info__comics__list">
        <CharListContent />
      </div>
    </>
  )
}

export default CharInfo;