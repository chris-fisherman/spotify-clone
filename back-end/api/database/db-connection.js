/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
import { MongoClient } from 'mongodb';
import 'dotenv/config';
const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;
const client = new MongoClient(DB_URI);

/******************************/
/*** CONNECTION ***/
/******************************/
const db = client.db(DB_NAME);

// const songsCollection = await db.collection('songs').find({}).toArray();
// console.log(songsCollection);

/******************************/
/*** EXPORTS ***/
/******************************/
export default db;
