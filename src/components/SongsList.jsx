/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import SongItem from './SongItem';

const SongsList = ({ songsArray }) => {
  const [itemsNumber, setItemsNumber] = useState(5);
  const [show, setShow] = useState('');

  const seeMore = () => {
    setItemsNumber(itemsNumber + 5);
    setShow('show');
  };

  const showLess = () => {
    setItemsNumber(itemsNumber - 5);
    setShow('');
  };

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

      <p className={`song-list__see-more ${show}`} onClick={seeMore}>
        See more
      </p>

      <p className={`song-list__see-less ${show}`} onClick={showLess}>
        Show less
      </p>
    </section>
  );
};

export default SongsList;
