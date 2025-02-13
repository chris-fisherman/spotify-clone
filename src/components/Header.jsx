// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className='header'>
      <a className='header__logoLink' href='/' title='Home Page'>
        <FontAwesomeIcon icon={faSpotify} />
        <h1>Spotify Clone</h1>
      </a>
      <div className='header__sideLinks'>
        <a href='#' title='This is just an example link'>
          <p>Register now</p>
        </a>
        <a
          className='header__sideLinks--buttonStyle'
          href='#'
          title='Another example link'
        >
          <p>Login</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
