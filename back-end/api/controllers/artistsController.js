/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
/* database */
import db from '../database/dbConnection.js';

/******************************/
/*** GET ALL ARTISTS ***/
/******************************/
export const getAllArtists = async (req, res) => {
  res.send(await db.collection('artists').find({}).toArray());
};
