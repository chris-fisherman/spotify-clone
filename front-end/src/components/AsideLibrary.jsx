/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import CardLibrary from './CardLibrary';

const AsideLibrary = () => {
  return (
    <aside className='aside-library'>
      <header className='aside-library__header'>
        <h2 title='Open your library'>
          <FontAwesomeIcon icon={faBookmark} /> Your library
        </h2>
        <div
          className='aside-library-header__plus-icon'
          title='Create a new list or folder'
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </header>

      <div className='aside-library__body'>
        <CardLibrary
          title={'Create your first list'}
          text={`It's very easy, we'll give you a hand.`}
          btnBody={'Create list'}
        />

        <CardLibrary
          title={'Find podcasts you want to follow'}
          text={`We will notify you when new episodes are released.`}
          btnBody={'Explore podcasts'}
        />
      </div>
    </aside>
  );
};

export default AsideLibrary;
