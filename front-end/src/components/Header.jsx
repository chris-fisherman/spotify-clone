// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import WhiteButton from './WhiteButton';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' title='Home Page' className='header__logoLink'>
        <FontAwesomeIcon icon={faSpotify} />
        <h1>Spotify Clone</h1>
      </Link>
      <div className='header__sideLinks'>
        <Link to='#' title='This is just an example link'>
          <p>Register now</p>
        </Link>
        <WhiteButton body={'Login'} />
      </div>
    </header>
  );
};

export default Header;
