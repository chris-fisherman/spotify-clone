/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
/* controllers */
import { getAllSongs } from '../controllers/songsController.js';
/* router */
import express from 'express';
const router = express();

/******************************/
/*** ROUTES ***/
/******************************/
router.get('/', getAllSongs);

/******************************/
/*** EXPORT ***/
/******************************/
export default router;
