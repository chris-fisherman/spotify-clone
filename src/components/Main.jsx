// eslint-disable-next-line no-unused-vars
import React from 'react';
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Main = () => {
  return (
    <main className='main'>
      <ItemList
        title='artists'
        items={8}
        itemsArray={artistArray}
        path={'artists'}
        idPath={'/artist'}
      />
      <ItemList
        title='songs'
        items={16}
        itemsArray={songsArray}
        path={'songs'}
        idPath={'/song'}
      />
    </main>
  );
};

export default Main;
