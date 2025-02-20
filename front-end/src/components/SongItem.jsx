/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const SongItem = ({ image, name, duration, artist, audio, _id, index }) => {
  return (
    <li>
      <Link to={`/song/${_id}`} className='song-item'>
        <div className='song-item__frst-container'>
          <div
            className='frst-container__number-container'
            title={`Play ${name}`}
          >
            <p>{index + 1}</p>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div>
            <img src={image} alt={`${name} image`} />
            <h4 title={name}>{name}</h4>
          </div>
        </div>

        <div className='song-item__scnd-container'>
          <p className='song-item__middle-name'>{artist}</p>

          <div>
            <FontAwesomeIcon
              icon={faCirclePlus}
              title='Add to songs you like'
            />
            <p>{duration}</p>
            <FontAwesomeIcon
              icon={faEllipsis}
              title={`More options to ${name} of ${artist}`}
            />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SongItem;
