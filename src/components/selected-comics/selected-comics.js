import React from 'react';
import './selected-comics.scss'
import xMen from "../../resources/img/x-men.png";

const SelectedComics = () => {
  return (
    <div className='selected__comics'>
      <img src={xMen} alt="#" />
      <div className="selected__comics__info">
        <p className="selected__comics__info__name">X-Men: Days of Future Past</p>
        <p className="selected__comics__info__description">
          Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth,
          and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight,
          the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
        </p>
        <p className="selected__comics__info__pages">144 pages</p>
        <p className="selected__comics__info__language">Language: en-us</p>
        <p className="selected__comics__info__price">9.99$</p>
      </div>
      <div className="link__toBack">
        <a href="/" >Back to all</a>
      </div>
    </div>
  );
};

export default SelectedComics;