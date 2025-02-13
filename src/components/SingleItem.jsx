/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleItem = ({ id, image, name, banner, artist, idPath }) => {
  return (
    <li className='item-section__single-item'>
      <Link to={`${idPath}/${id}`}>
        <div className='item-section__img-container'>
          <img src={image} alt={`${name} image artist`} />
          <FontAwesomeIcon icon={faCirclePlay} />
        </div>
        <section className='item-section__texts'>
          <h3 title={name}>{name}</h3>
          <p>{artist ?? 'Artist'}</p>
        </section>
      </Link>
    </li>
  );
};

export default SingleItem;
