/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Player = ({ duration, randomIdFromArtist, randomIdFromArtist2 }) => {
  return (
    <div className='player-container'>
      <div className='player-controllers'>
        <Link
          to={`/song/${randomIdFromArtist}`}
          className='player-controllers__icon'
          title='Play a random song'
        >
          <FontAwesomeIcon icon={faBackwardStep} />
        </Link>
        <button className='player-controllers__icon--play'>
          <FontAwesomeIcon icon={faCirclePlay} title='Play' />
        </button>
        <Link
          to={`/song/${randomIdFromArtist2}`}
          className='player-controllers__icon'
          title='Play a random song'
        >
          <FontAwesomeIcon icon={faForwardStep} />
        </Link>
      </div>

      <div className='player-progress'>
        <p>0:00</p>
        <div className='player-bar'>
          <div className='player-bar__progress'></div>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Player;
