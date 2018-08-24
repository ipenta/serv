const path = require('path');
const config = require('./config');
const router = require('express').Router();
const httpStatus = require('http-status');
const expressValidation = require('express-validation');
const APIError = require('../utils/APIError');

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const { routerFilter } = require('../utils/traversal');

const supportDir = path.resolve(__dirname, '../support');
const serverDir = path.resolve(__dirname, '../server');

const jwtAuth = expressJwt({secret: config.jwtSecret}).unless({path: config.whitelist})

router.use(function(req, res, next) {
  // 拿取token 数据 按照自己传递方式
  var token = req.body.token || req.query.token || req.headers['authorization'];
  if (token) {
    token = token.split(' ')
    if (token.length == 2) {
      var scheme = token[0];
      var credentials = token[1];
      if (/^Bearer$/i.test(scheme)) {
        token = credentials;
      }
      jwt.verify(token, config.jwtSecret, function(err, decoded) {
        if (err) {
          return res.json({ status: 'fail' , message: '无效的token.' });
        } else {
          req.decoded = decoded;
          next(); //继续下一步路由
        }
      })
    }
  } else {
    return res.status(403).json({
      status: 'error',
      message: '访问无授权'
    });
  }
});

routerFilter(router, supportDir);
routerFilter(router, serverDir);

const validationHandler = (err, req, res, next) => {
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

const noFoundHandler = (req, res, next) => {
  const err = new APIError('API not found', httpStatus.NOT_FOUND);
  return next(err);
}

const errorProxy = (err, req, res, next) => {
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: config.env === 'development' ? err.stack : {}
  })
}

const registerRouter = function (app) {
  app.use(jwtAuth)
  app.use(config.apiVersion, router)

  // validation error and forward to error handler
  app.use(validationHandler);

  // catch 404 error and forward to error handler
  app.use(noFoundHandler);
  // output error handler, send stacktrace only during development
  app.use(errorProxy);
}

module.exports = registerRouter;
