/* eslint-disable no-unused-vars */
import React from 'react';
import AsideLibrary from '../components/AsideLibrary';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Player from '../components/Player';
import WhiteButton from '../components/WhiteButton';
import SongsList from '../components/SongsList';
import { songsArray } from '../assets/database/songs';
import { artistArray } from '../assets/database/artists';
import MainFooter from '../components/MainFooter';

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj, index) => currentSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj, index) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIdFromArtist2 = songsArrayFromArtist[randomIndex2]._id;

  const ImgShadow = styled.div`
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: url(${image});
      position: absolute;
      background-size: contain;
      background-repeat: no-repeat;
      filter: drop-shadow(0px 0px) blur(40px);
      z-index: -1;
    }
  `;

  const HeaderBackground = styled.div`
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(${image});
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;
      filter: drop-shadow(0px 0px) blur(40px);
      z-index: -2;
    }
  `;

  return (
    <main>
      <AsideLibrary />

      <div className='song-main'>
        <header className='song-header'>
          <div className='song-header__img-container'>
            <img src={image} alt={`${name} image`} />
            <ImgShadow />
          </div>
          <section className='song-header__texts-container'>
            <p>Song</p>
            <h2>{name}</h2>
            <div className='texts-container__below-texts'>
              <img src={artistObj.image} alt={`${artistObj.name} image`} />
              <Link to={`/artist/${artistObj._id}`}>{artist}</Link>
              <span>•</span>
              <p>{name}</p>
              <span>•</span>
              <p className='texts-container__below-texts--gray'>{duration}</p>
            </div>
          </section>
          <HeaderBackground />
        </header>

        <div className='song-body'>
          <Player
            duration={duration}
            randomIdFromArtist={randomIdFromArtist}
            randomIdFromArtist2={randomIdFromArtist2}
            audio={audio}
          />

          <section className='song-signin-article'>
            <h3>Sign in to see the lyrics and listen to the full song</h3>
            <div className='song-signin-article__buttons'>
              <Link to='#' title='Example'>
                Sign in
              </Link>
              <WhiteButton body={'Register'} />
            </div>
          </section>

          <Link to={`/artist/${artistObj._id}`} className='song-artist-section'>
            <img src={artistObj.image} alt={`${artistObj.name} image`} />
            <div className='song-artist-section__texts'>
              <p>Artist</p>
              <p>{artist}</p>
            </div>
          </Link>

          <MainFooter />

          {/* <SongsList /> */}
        </div>
      </div>
    </main>
  );
};

export default Song;
