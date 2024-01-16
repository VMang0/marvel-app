import React from 'react';
import spinner from './spinner.gif';
import '../assets.scss'

const Spinner = () => {
  return (
    <img src={spinner} alt="spinner for loading" className='spinner' />
  );
};

export default Spinner;