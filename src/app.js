require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./error-handler');
const coursesRouter = require('./courses/courses-router');
const questionsRouter = require('./questions/questions-router');
const usersRouter = require('./users/users-router')

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/courses', coursesRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/users', usersRouter);

app.use(errorHandler);

module.exports = app;