import React from 'react';
import AppHeader from "../app-header/app-header";
import '../../style/style.scss';

import RandomCharBlock from "../random-char-block/random-char-block";
import CharCardsList from "../char-cards-list/char-cards-list";
import CharInfoForm from "../char-info-form/char-info-form";
import decoration from '../../resources/img/vision.png'
const App = () => {
  return (
    <div className='app'>
      <AppHeader />
      <main>
        <RandomCharBlock />
        <div className="char__content">
          <CharCardsList />
          <CharInfoForm />
        </div>
        <img src={decoration} alt="decoration man" className="bg_decoration"/>
        {/*<AppBanner />
        <ComicsCardsList />
        <SelectedComics />
        <SelectedChar />*/}
      </main>
    </div>
  );
};

export default App;