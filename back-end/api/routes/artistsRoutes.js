/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
/* controllers */
import { getAllArtists } from '../controllers/artistsController.js';
/* router */
import express from 'express';
const router = express();

/******************************/
/*** ROUTES ***/
/******************************/
router.get('/', getAllArtists);

/******************************/
/*** EXPORT ***/
/******************************/
export default router;
