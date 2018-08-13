const path = require('path');
const config = require('./config');
const router = require('express').Router();
const httpStatus = require('http-status');
const expressValidation = require('express-validation');
const APIError = require('../support/utils/APIError');

const jwt = require('express-jwt');

const { routerFilter } = require('../support/utils/traversal');

const supportDir = path.resolve(__dirname, '../support');
const serverDir = path.resolve(__dirname, '../server');

// 系统级别API
router.use(jwt({ secret: config.jwtSecret }).unless({ path: config.whitelist }), routerFilter(supportDir));
// 用户级别API
router.use(jwt({ secret: config.jwtSecret }), routerFilter(serverDir));

const validateHandler = function (err, req, res, next) {
  if(err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
    const error = new APIError(unifiedErrorMessage, err.status, true);
    return next(error);
  } else if(!(err instanceof APIError)) {
    const apiError = new APIError(err.message, err.status, err.isPublic);
    return next(apiError);
  }
  return next(err);
}

const notFoundHandler = function (req, res, next) {
  const err = new APIError('API not found', httpStatus.NOT_FOUND);
  return next(err);
}

const errorProxy = function (err, req, res, next) {
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: config.env === 'development' ? err.stack : {}
  })
}

const registerRouter = function (app) {
  app.use(config.apiVersion, router);
  // catch validate error and forward to error handler
  app.use(validateHandler);
  //
  // // catch 404 error and forward to error handler
  app.use(notFoundHandler);
  //
  // // output error handler, send stacktrace only during development
  app.use(errorProxy);
}


module.exports = registerRouter;
