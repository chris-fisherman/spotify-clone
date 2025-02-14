/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const SongItem = () => {
  return (
    <Link to='/song/1' className='song-item'>
      <div className='song-item__frst-container'>
        <div
          className='frst-container__number-container'
          title='Play Última Saudade - Ao Vivo of Henrique & Juliano'
        >
          <p>1</p>
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <div>
          <img
            src='https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24'
            alt='Song'
          />
          <h4 title='Última Saudade - Ao Vivo'>Última Saudade - Ao Vivo</h4>
        </div>
      </div>
      <p className='song-item__middle-name'>Henrique & Juliano</p>
      <div className='song-item__scnd-container'>
        <FontAwesomeIcon icon={faCirclePlus} title='Add to songs you like' />
        <div>
          <p>2:30</p>
          <FontAwesomeIcon
            icon={faEllipsis}
            title='More options to Última Saudade - Ao Vivo of Henrique & Juliano'
          />
        </div>
      </div>
    </Link>
  );
};

export default SongItem;
