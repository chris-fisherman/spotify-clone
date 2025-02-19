/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import SongsList from '../components/SongsList';
import AsideLibrary from '../components/AsideLibrary';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Artist = () => {
  const { id } = useParams();

  const artistObj = artistArray.filter(
    (currentArtistObj, index) => currentArtistObj.id === Number(id)
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;

  return (
    <main>
      <AsideLibrary />
      <div className='artist-main'>
        <img
          className='artist-main__img'
          src={artistObj.banner}
          alt={`${artistObj.name} image`}
        />
        <header className='artist-header'>
          <div>
            <FontAwesomeIcon icon={faCertificate} />
            <p>Verified Artist</p>
          </div>
          <h2>{artistObj.name}</h2>
        </header>
        <div className='artist-body'>
          <div className='artist-body__btn-container'>
            <Link to={`/song/${randomIdFromArtist}`} title='Play random song'>
              <button className='artist-body__play-icon'>
                <FontAwesomeIcon icon={faCirclePlay} />
              </button>
            </Link>
            <button className='artist-body__follow-btn'>Follow</button>
            <button className='artist-body__ellipsis-icon'>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </div>
          <SongsList songsArray={songsArrayFromArtist} />
        </div>
      </div>
    </main>
  );
};

export default Artist;
