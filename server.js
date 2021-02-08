require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./src/db');

const casesRouter = require('./src/routes/cases');
const blogsRouter = require('./src/routes/blog');
const suscriberRouter = require('./src/routes/suscriber');
const shopRouter = require('./src/routes/shop');


const port = 8000;

const app = express();
connect();

app.use(express.json());
app.use(cors());

app.use('/cases', casesRouter);
app.use('/blogs', blogsRouter);
app.use('/suscriber', suscriberRouter);
app.use('/shop', shopRouter);

app.listen(port, () => {
  console.log(`app running at http:${port}`);
});