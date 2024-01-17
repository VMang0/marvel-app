import React, {Component} from 'react';
import './char-info-form.scss';
import Service from "../../service/service";
import Error from "../assets/error/error";
import Spinner from "../assets/spinner/spinner";
import Skeleton from "../assets/skeleton/skeleton";

class CharInfoForm extends Component{
  marvelService = new Service();
  state = {
    char: null,
    loading: false,
    error: false
  }

  componentDidMount() {
    this.updateChar();
  }
  componentDidUpdate(prevProps) {
    const { charId } = this.props;
    if (charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false,
    })
  }
  onCharLoading = () => {
    this.setState({
      loading: true,
      error: false
    })
  }
  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }
  updateChar = () => {
    const { charId } = this.props;
    if (!charId) {
      return;
    }
    this.onCharLoading()
    this.marvelService
      .getCharacter(charId)
      .then(this.onCharLoaded)
      .catch(this.onError)
  }

  render() {
    const { char, loading, error } = this.state;
    const skeleton = !(error || loading || char) ? <Skeleton /> : null;
    const errorMessage = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || skeleton) ? <CharInfo char={char} /> : null;

    return (
      <div className='char__info'>
        { skeleton }
        { errorMessage }
        { spinner }
        { content }
      </div>
    );
  }
}

const CharInfo = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  const objectFit = thumbnail.split('/').includes('image_not_available.jpg') ? 'contain' : 'cover';

  const CharListContent = () => {
    if (comics.length > 0) {
      return (
        <div className="char__info__comics__list">
          <ul className="char__info__comics__grid">
            {
              comics.map((item, index) => (
                <li className="char__info__comics__item" key={index}>
                  { item.name }
                </li>
              ))
            }
          </ul>
        </div>
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
      <CharListContent />
    </>
  )
}

export default CharInfoForm;