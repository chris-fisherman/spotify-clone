/* eslint-disable no-unused-vars */
import React from 'react';
import { artistArray } from '../assets/database/artists';
import Main from '../components/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Artist = () => {
  return (
    <main className='artist-main'>
      <img
        className='artist-main__img'
        src={'https://i.scdn.co/image/ab67618600001016b37fbcbd078cb239588df5d9'}
        alt='Image'
      />
      <header className='artist-header'>
        <div>
          <FontAwesomeIcon icon={faCertificate} />
          <p>Verified Artist</p>
        </div>
        <h2>Henrique & Juliano</h2>
      </header>
      <div className='artist-body'>
        <div className='artist-body__btn-container'>
          <button className='artist-body__play-icon'>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <button className='artist-body__follow-btn'>Follow</button>
          <button className='artist-body__ellipsis-icon'>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Artist;
