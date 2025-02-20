/******************************/
/*** REQUIRE STATEMENTS ***/
/******************************/
/* middlewares */
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();
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

app.use(express.static(path.join(__dirname, '../front-end/dist')));
app.get('*', async (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/dist/index.html'));
});

/******************************/
/*** LISTEN PORT ***/
/******************************/
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
