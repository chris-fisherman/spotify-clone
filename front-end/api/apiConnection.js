/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
// import 'dotenv/config';
import axios from 'axios';
// const NODE_ENV = process.env.NODE_ENV;
// const URL = NODE_ENV === 'development' ? 'http://localhost:3030/api' : '/api';
const URL = 'https://spotify-clone-hllg.onrender.com/api';

/******************************/
/*** API CONNECTION ***/
/******************************/
const artistsResponse = await axios.get(`${URL}/artists`);
const songsResponse = await axios.get(`${URL}/songs`);

/******************************/
/*** EXPORT DATA ***/
/******************************/
export const artistArray = artistsResponse.data;
export const songsArray = songsResponse.data;
