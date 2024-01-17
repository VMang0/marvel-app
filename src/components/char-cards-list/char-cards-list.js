import React, {Component} from 'react';
import CharCard from "../char-card/char-card";
import './char-cards-list.scss'
import Service from "../../service/service";
import Spinner from "../assets/spinner/spinner";

class CharCardsList extends Component {
  service = new Service();
  state = {
    chars: [],
    loading: true,
    error: false
  }
  onChartsLoad = (chars) => {
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
      .then(this.onChartsLoad)
      .catch(this.onError)
  }

  render() {
    const { chars, loading } = this.state;
    const content = loading ? <Spinner /> :  <CharList chars={chars} />
    return (
      <div className='char__list'>
        { content }
      </div>
    );
  }
}

const CharList = ({ chars }) => {
  return (
    <>
      <ul className='char__grid'>
        {
          chars.map((item) => (
            <CharCard key={item.id} char={item} />
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