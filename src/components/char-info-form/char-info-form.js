import React, {Component} from 'react';

import Service from "../../service/service";
import Error from "../assets/error/error";
import Spinner from "../assets/spinner/spinner";
import Skeleton from "../assets/skeleton/skeleton";
import CharInfo from "./char-info/char-info";

import './char-info-form.scss';

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

export default CharInfoForm;