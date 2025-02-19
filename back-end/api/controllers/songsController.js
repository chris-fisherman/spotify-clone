/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
/* database */
import db from '../database/db-connection.js';

/******************************/
/*** GET ALL SONGS ***/
/******************************/
export const getAllSongs = async (req, res) => {
  res.send(await db.collection('songs').find({}).toArray());
};
