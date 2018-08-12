const path = require('path');

const app = require('express')();
const bodyParser = require('body-parser');

const cors = require('cors');
const helmet = require('helmet');
const httpStatus = require('http-status');

const {supportRouter,serverRouter} = require('./router');

const tokenfilter = require('./tokenfilter');
const expressValidation = require('express-validation');

const config = require('./config');
const APIError = require('../support/utils/APIError');

app.set('jwtSecret',config.jwtSecret)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

app.use(tokenfilter)

// 系统级别API
app.use(config.apiPrefix,supportRouter)
// 用户级别API
app.use(config.apiPrefix,serverRouter)

app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
    const error = new APIError(unifiedErrorMessage, err.status, true);
    return next(error);
  } else if (!(err instanceof APIError)) {
    const apiError = new APIError(err.message, err.status, err.isPublic);
    return next(apiError);
  }
  return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('API not found', httpStatus.NOT_FOUND);
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => // eslint-disable-line no-unused-vars
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: config.env === 'development' ? err.stack : {}
  })
);

module.exports = app;
