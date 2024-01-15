import React from 'react';
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';
import './app-banner.scss';

const AppBanner = () => {
  return (
    <div className='app__banner'>
      <img src={avengers} alt="" className='img__avengers'/>
      <h2>New comics every week!<br/>Stay tuned!</h2>
      <img src={avengersLogo} alt="" className='img__avengersLogo'/>
    </div>
  );
};

export default AppBanner;