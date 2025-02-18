/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import SongItem from './SongItem';

const SongsList = ({ songsArray }) => {
  const itemsNumber = 5;
  return (
    <section className='song-list'>
      <h3 className='song-list__title'>Populars</h3>
      <ul className='song-list__list'>
        {songsArray
          .filter((currentValue, index) => index < itemsNumber)
          .map((currentSongObj, index) => (
            <SongItem {...currentSongObj} index={index} key={index} />
          ))}
      </ul>
      <p className='song-list__see-more'>See more</p>
    </section>
  );
};

export default SongsList;
