import React, {Component} from 'react';

import AppHeader from "../app-header/app-header";
import RandomCharBlock from "../random-char-block/random-char-block";
import CharCardsList from "../char-cards-list/char-cards-list";
import CharInfoForm from "../char-info-form/char-info-form";

import '../../style/style.scss';
import decoration from '../../resources/img/vision.png'

class App extends Component {
  state = {
    selectedChar: null
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render() {
    const charId = this.state.selectedChar;

    return (
      <div className='app'>
        <AppHeader />
        <main>
          <RandomCharBlock />
          <div className="char__content">
            <CharCardsList
              onCharSelected={this.onCharSelected}
              charId={charId} />
            <CharInfoForm charId={charId} />
          </div>
          <img src={decoration} alt="decoration man" className="bg_decoration"/>
        </main>
      </div>
    );
  }
}

export default App;