/* eslint-disable no-unused-vars */
import React from 'react';
import AsideLibrary from '../components/AsideLibrary';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Player from '../components/Player';
import WhiteButton from '../components/WhiteButton';
import SongsList from '../components/SongsList';

// const Header = styled.header`
//   &:before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: url('https://i.scdn.co/image/ab67616d00001e0299c540c0f78793fcea84a920');
//     background-size: cover;
//     background-position: center;
//     filter: blur(50px);
//     transform: scale(3);
//     z-index: -1;
//   }
// `;

const ImgShadow = styled.div`
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('https://i.scdn.co/image/ab67616d00001e0299c540c0f78793fcea84a920');
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
    background-image: url('https://i.scdn.co/image/ab67616d00001e0299c540c0f78793fcea84a920');
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 0px) blur(40px);
    z-index: -2;
  }
`;

const Song = () => {
  return (
    <main>
      <AsideLibrary />
      <div className='song-main'>
        <header className='song-header'>
          <div className='song-header__img-container'>
            <img
              src={
                'https://i.scdn.co/image/ab67616d00001e0299c540c0f78793fcea84a920'
              }
              alt='Image'
            />
            <ImgShadow />
          </div>
          <section className='song-header__texts-container'>
            <p>Song</p>
            <h2>De Trás Pra Frente - Ao Vivo</h2>
            <div className='texts-container__below-texts'>
              <img
                src={
                  'https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4'
                }
                alt='Image'
              />
              <Link to={'/artist/1'}>Henrique & Juliano</Link>
              <span>•</span>
              <p>De Trás Pra Frente - Ao Vivo</p>
              <span>•</span>
              <p className='texts-container__below-texts--gray'>2:43</p>
            </div>
          </section>
          <HeaderBackground />
        </header>

        <div className='song-body'>
          <Player />

          <section className='song-signin-article'>
            <h3>Sign in to see the lyrics and listen to the full song</h3>
            <div className='song-signin-article__buttons'>
              <Link to='#' title='Example'>
                Sign in
              </Link>
              <WhiteButton body={'Register'} />
            </div>
          </section>

          <Link to={'/artist/1'} className='song-artist-section'>
            <img
              src={
                'https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4'
              }
              alt='Image'
            />
            <div className='song-artist-section__texts'>
              <p>Artist</p>
              <p>Henrique & Juliano</p>
            </div>
          </Link>

          {/* <SongsList /> */}
        </div>
      </div>
    </main>
  );
};

export default Song;
