const jwt = require('jsonwebtoken');
const Auth = require('./auth.model');
const config = require('../../config/config');
const APIError = require('../../utils/APIError');
const httpStatus = require('http-status');

const login = function (req, resp, next) {
  Auth.findOne(req.body,'identifier identity_type')
    .then(result=>{
      if (result) {
        const token = jwt.sign({ identifier: result.identifier }, config.jwtSecret)
        return resp.json({
          token,
          identity_type: result.identity_type,
          identifier: result.identifier
        })
      }else{
        const err = new APIError('没有权限', httpStatus.UNAUTHORIZED, true);
        return next(err);
      }
    }).catch(err => next(new APIError(err)))
}

const register = function (req, resp, next) {
  Auth.findOne(req.body)
    .then(result => {
      if (result) {
        const err = new APIError('用户名已经存在',httpStatus.CONFLICT, true);
        return next(err);
      }else {
        Auth.create(req.body).catch(err => APIError(err))
          .then(result => resp.json(result))
      }
    }).catch(err => next(new APIError(err)))
}


function getRandomNumber() {
}

module.exports = { login, register, getRandomNumber };
