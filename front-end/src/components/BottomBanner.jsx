/* eslint-disable no-unused-vars */
import React from 'react';
import WhiteButton from './WhiteButton';

const BottomBanner = () => {
  return (
    <div className='bottom-banner'>
      <section className='bottom-banner__section'>
        <h2>Spotify sample</h2>
        <p>
          Sign up to enjoy unlimited songs and podcasts, with occasional ads. No
          credit card required.
        </p>
      </section>

      <section className='bottom-banner__section--mobile'>
        <p>Sign up to enjoy unlimited songs and podcasts.</p>
      </section>

      <WhiteButton body={'Register'} />
    </div>
  );
};

export default BottomBanner;
