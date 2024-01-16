import React from 'react';
import error from './error.gif';
import '../assets.scss';

const Error = () => {
  return (
    <img src={error} alt="error" className='error' />
  );
};

export default Error;