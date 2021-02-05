require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('./src/db');

const casesRouter = require('./src/routes/cases');

const port = 8000;

const app = express();
connect();

app.use(express.json());
app.use(cors());

app.use('/cases', casesRouter);

app.listen(port, () => {
  console.log(`app running at http:${port}`);
});