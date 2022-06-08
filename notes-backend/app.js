const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql2');
const cors = require('cors');

const indexRouter = require('./routes/index');
const notesRouter = require('./routes/notes');
const loginRouter = require('./routes/login');

const app = express();

app.locals.con = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'notes',
  password: 'm5DDbOhx80WwKnny',
  database: 'notes',
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/notes', notesRouter);
app.use('/login', loginRouter);

module.exports = app;
