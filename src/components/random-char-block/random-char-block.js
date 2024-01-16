import React, {Component} from 'react';
import mjolnir from '../../resources/img/mjolnir.png';
import './random-char-block.scss'
import RandomChar from "./random-char/random-char";
import Service from "../../service/service";
import Spinner from "../assets/spinner/spinner";
import Error from "../assets/error/error";

class RandomCharBlock extends Component{
  state = {
    char: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updateChar();
  }

  marvelService = new Service();

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
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.onCharLoading()
    this.marvelService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError)
  }

  render() {
    const { char, loading, error } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <Error /> : null;
    const content = !(loading || error) ? <RandomChar char={char} /> : null;

    return (
      <div className="randomCharBlock">
        <div className="randomCharBlock__dynamic">
          {spinner}
          {errorMessage}
          {content}
        </div>
        <div className="randomCharBlock__static">
          <p className='randomCharBlock__static__title'>
            Random character for today!<br/>
            Do you want to get to know him better?
          </p>
          <p className='randomCharBlock__static__title'>
            Or choose another one
          </p>
          <button
            className="button button__main button__dark"
            aria-label='click to choose another character'
            onClick={this.updateChar}>
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="Thor's Hammer and Captain America's Shield"/>
        </div>
      </div>
    );
  }
}

export default RandomCharBlock;