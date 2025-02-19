/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
/* files */
import indexRoutes from './routes/indexRoutes.js';
/* app */
import express from 'express';
const PORT = 3030;
const app = express();

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
