/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
/* files */
// import { artistArray } from '../../../front-end/src/assets/database/artists.js';
// import { songsArray } from '../../../front-end/src/assets/database/songs.js';
/* endpoints */
import artistsRoutes from './artistsRoutes.js';
import songsRoutes from './songsRoutes.js';
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
  .use('/artists', artistsRoutes)
  .use('/songs', songsRoutes);

/******************************/
/*** EXPORT ***/
/******************************/
export default router;
