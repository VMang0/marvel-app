import React, {Component} from 'react';
import CharCard from "../char-card/char-card";
import './char-cards-list.scss'
import Service from "../../service/service";
import Spinner from "../assets/spinner/spinner";
import Error from "../assets/error/error";

class CharCardsList extends Component {
  service = new Service();
  state = {
    chars: [],
    loading: true,
    error: false
  }
  onCharsLoad = (chars) => {
    this.setState({
      chars,
      loading: false,
    });
  }
  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  }
  componentDidMount() {
    this.service
      .getAllCharacters()
      .then(this.onCharsLoad)
      .catch(this.onError)
  }

  render() {
    const { chars, loading, error } = this.state;
    const { onCharSelected } = this.props;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <Error /> : null;
    const content = !(loading || error) ? <CharList chars={chars} onCharSelected={onCharSelected} /> : null;
    return (
      <div className='char__list'>
        { content }
        { spinner }
        { errorMessage }
      </div>
    );
  }
}

const CharList = ({ chars, onCharSelected }) => {
  return (
    <>
      <ul className='char__grid'>
        {
          chars.map((item) => (
            <CharCard
              key={item.id}
              char={item}
              onCharSelected={onCharSelected} />
          ))
        }
      </ul>
      <button
        className="button button__main button__light button__long"
        aria-label='click to load more character'>
        <div className="inner">load more</div>
      </button>
    </>
  )
}

export default CharCardsList;