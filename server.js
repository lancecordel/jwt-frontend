const express = require('express');
const db = require('./db');
const routes = require('./routes');
const app = express();
const logger = require('morgan')
const PORT = process.env.PORT;
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));

app.use('/api', routes);

db.on('error',console.error.bind(console, 'Error connecting to database'));

if (PORT == null || PORT == "") {
  PORT = 8000;
}

app.listen(PORT, () => console.log('listening on port ' + PORT));