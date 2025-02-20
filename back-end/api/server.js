/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
/* middlewares */
import cors from 'cors';
/* files */
import indexRoutes from './routes/indexRoutes.js';
/* app */
import express from 'express';
const PORT = 3030;
const app = express();

/******************************/
/*** USES ***/
/******************************/
app.use(cors());

/******************************/
/*** ROUTES ***/
/******************************/
app.use('/', indexRoutes);

/******************************/
/*** LISTEN PORT ***/
/******************************/
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
