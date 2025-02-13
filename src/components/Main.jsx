/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';
import { useLocation } from 'react-router-dom';

const Main = ({ type }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const mainClassName = isHome ? <></> : 'big-top-padding';
  return (
    <main className={`main ${mainClassName}`}>
      {type === 'artists' || type === undefined ? (
        <ItemList
          title='artists'
          items={8}
          itemsArray={artistArray}
          path={'artists'}
          idPath={'/artist'}
        />
      ) : (
        <></>
      )}
      {type === 'songs' || type === undefined ? (
        <ItemList
          title='songs'
          items={16}
          itemsArray={songsArray}
          path={'songs'}
          idPath={'/song'}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Main;
