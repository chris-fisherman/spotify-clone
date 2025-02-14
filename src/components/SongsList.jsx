/* eslint-disable no-unused-vars */
import React from 'react';
import SongItem from './SongItem';

const SongsList = () => {
  return (
    <section className='song-list'>
      <h3 className='song-list__title'>Populars</h3>
      <ul className='song-list__list'>
        <li>
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
          <SongItem />
        </li>
      </ul>
      <p className='song-list__see-more'>See more</p>
    </section>
  );
};

export default SongsList;
