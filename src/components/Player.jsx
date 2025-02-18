/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Player = () => {
  return (
    <div className='player-container'>
      <div className='player-controllers'>
        <Link to={'/song/1'} className='player-controllers__icon'>
          <FontAwesomeIcon icon={faBackwardStep} title='Previous song' />
        </Link>
        <button className='player-controllers__icon--play'>
          <FontAwesomeIcon icon={faCirclePlay} title='Play' />
        </button>
        <Link to={'/song/3'} className='player-controllers__icon'>
          <FontAwesomeIcon icon={faForwardStep} title='Next song' />
        </Link>
      </div>

      <div className='player-progress'>
        <p>0:00</p>
        <div className='player-bar'>
          <div className='player-bar__progress'></div>
        </div>
        <p>2:30</p>
      </div>
    </div>
  );
};

export default Player;
