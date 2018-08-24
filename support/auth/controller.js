const jwt = require('jsonwebtoken');
const model = require('./model');
const config = require('../../config/config');
const APIError = require('../../utils/APIError');
const httpStatus = require('http-status');

const login = function (req, resp, next) {
  model.findOne(req.body, 'identity_type identifier credential').then(result => {
    if (result) {
      const token = jwt.sign({ identifier: result.identifier }, config.jwtSecret)
      resp.json({status: "success", data: { token }})
    }else{
      resp.json({status: "fail", message: "无法匹配登录信息，登录失败"})
    }
  }).catch(err => next(new APIError(err)))
}

const register = function (req, resp, next) {
  model.findOne(req.body,'identifier identity_type').then(result => {
    if (result) {
      resp.json({status : "fail", message: "注册用户已经存在"})
    } else {
      model.create(req.body).then(result => {
        if (result) {
          resp.json({status : "success", data : null})
        }
      })
    }
  }).catch(err => next(new APIError(err)))
}


function getRandomNumber() {
}

module.exports = { login, register, getRandomNumber };
