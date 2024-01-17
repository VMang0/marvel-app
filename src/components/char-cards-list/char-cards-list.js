import React, {Component} from 'react';
import CharCard from "../char-card/char-card";
import './char-cards-list.scss'
import Service from "../../service/service";
import Spinner from "../assets/spinner/spinner";
import Error from "../assets/error/error";

class CharCardsList extends Component {
  //для предотвращения вызыва повторного getCharsList при монтировании страницы в strict mode
  constructor(props) {
    super(props);
    this.didLogRef = React.createRef();
    this.didLogRef.current = false;
  }
  service = new Service();
  state = {
    chars: [],
    loading: true,
    error: false,
    offset: 0,
    loadingNewChars: false,
    listEnded: false
  }
  componentDidMount() {
    //условие для предотвращения вызыва повторного getCharsList при монтировании страницы в strict mode
    if (this.didLogRef.current === false) {
      this.didLogRef.current = true;
      this.getCharsList();
    }
  }
  getCharsList = (offset) => {
    this.onLoadingNewCharsList()
    this.service
      .getAllCharacters(offset)
      .then(this.onCharsListLoaded)
      .catch(this.onError)
  }
  onLoadingNewCharsList = () => {
    this.setState({
      loadingNewChars: true
    })
  }
  onCharsListLoaded = ({ newChars, totalChar }) => {
    let listEnded = false;
    if (newChars > 9 || this.state.offset >= totalChar - 1) {
      listEnded = true;
    }
    this.setState(({ chars, offset }) => ({
      chars: [...chars, ...newChars],
      loading: false,
      offset: offset + 9,
      loadingNewChars: false,
      listEnded
    }));
  }
  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  }

  render() {
    const { chars, loading, error, offset, loadingNewChars, listEnded } = this.state;
    const { onCharSelected, charId } = this.props;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <Error /> : null;
    const content = !(loading || error)
      ? <CharList
        chars={chars}
        onCharSelected={onCharSelected}
        charId={charId}
        getCharsList={this.getCharsList}
        offset={offset}
        loadingNewChars={loadingNewChars}
        listEnded={listEnded} />
      : null;
    return (
      <div className='char__list'>
        { content }
        { spinner }
        { errorMessage }
      </div>
    );
  }
}

const CharList = (props) => {
  const { chars, onCharSelected, charId, getCharsList, offset, loadingNewChars, listEnded } = props;
  const display = listEnded ? 'none' : ''
  return (
    <>
      <ul className='char__grid'>
        {
          chars.map((item) => (
            <CharCard
              key={item.id}
              char={item}
              onCharSelected={onCharSelected}
              selected={charId === item.id}/>
          ))
        }
      </ul>
      <button
        className="button button__main button__light button__long"
        aria-label='click to load more character'
        disabled={loadingNewChars}
        onClick={() => getCharsList(offset)}
        style={{ display }}>
        <div className="inner">load more</div>
      </button>
    </>
  )
}

export default CharCardsList;