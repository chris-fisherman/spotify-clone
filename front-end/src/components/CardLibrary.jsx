/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import WhiteButton from './WhiteButton';

const CardLibrary = ({ title, text, btnBody }) => {
  return (
    <section className='card-library'>
      <h3>{title}</h3>
      <p>{text}</p>
      <WhiteButton className='card-library__btn' body={btnBody} />
    </section>
  );
};

export default CardLibrary;
