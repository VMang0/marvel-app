import React from 'react';
import './app-header.scss';

const AppHeader = () => {
  return (
    <header className='app__header'>
      <h1 className='app__title'>
        <a href='/курсы/new_course_react_js/public'>
          <span>Marvel</span> information portal
        </a>
      </h1>
      <nav className='app__menu'>
        <ul>
          <li><a href='/курсы/new_course_react_js/public'>Characters</a></li>
          /
          <li><a href='/курсы/new_course_react_js/public'>Comics</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;