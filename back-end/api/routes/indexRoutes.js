/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
/* files */
import { artistArray } from '../../../front-end/src/assets/database/artists.js';
import { songsArray } from '../../../front-end/src/assets/database/songs.js';
/* router */
import express from 'express';
const router = express();

/******************************/
/*** ROUTES ***/
/******************************/
router
  .get('/', (req, res) => {
    res.send(`We'll just use /artists and /songs`);
  })
  .get('/artists', (req, res) => {
    res.send(artistArray);
  })
  .get('/songs', (req, res) => {
    res.send(songsArray);
  });

/******************************/
/*** EXPORT ***/
/******************************/
export default router;
