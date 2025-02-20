/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
import axios from 'axios';
const URL = 'http://localhost:3030';

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

console.log(artistArray);
