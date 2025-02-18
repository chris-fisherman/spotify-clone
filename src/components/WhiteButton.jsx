/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const WhiteButton = ({ body }) => {
  return (
    <Link
      to='#'
      title='Another example link'
      className='header__sideLinks--buttonStyle'
    >
      <p>{body}</p>
    </Link>
  );
};

export default WhiteButton;
