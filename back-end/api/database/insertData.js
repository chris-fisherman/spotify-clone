/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
/* JSON files */
import { artistArray } from '../../../front-end/src/assets/database/artists.js';
import { songsArray } from '../../../front-end/src/assets/database/songs.js';
/* database */
import db from './dbConnection.js';

/******************************/
/*** NEW ARRAYS WITHOUT ID ***/
/******************************/
const newArtistsArray = artistArray.map((currentArtistObj) => {
  const newArtistsObj = { ...currentArtistObj };
  delete newArtistsObj.id;
  return newArtistsObj;
});
const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongsObj = { ...currentSongObj };
  delete newSongsObj.id;
  return newSongsObj;
});

/******************************/
/*** INSERT DATA TO DB ***/
/******************************/
const artistsResponse = await db
  .collection('artists')
  .insertMany(newArtistsArray);
const songsResponse = await db.collection('songs').insertMany(newSongsArray);

console.log(artistsResponse);
console.log(songsResponse);
