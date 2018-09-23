const jwt = require('jsonwebtoken');
const model = require('./model');
const config = require('../../config/config');
const APIError = require('../../utils/APIError');
const httpStatus = require('http-status');

const login = function (req, resp, next) {
  model.findOne(req.body, 'identity_type identifier credential').then(result => {
    if (result) {
      const token = jwt.sign({ id: result._id, identifier: result.identifier }, config.jwtSecret)
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

const getAuthInfo = function (req, resp, next) {
  model.findOne({ identifier: req.user.identifier }, 'identifier').then(result => {
    if (result) {
      _result = Object.assign({_id:result._id,identifier: result.identifier},
        {menus: [
          { name: "委托单管理", path: "/record", icon: "el-icon-star-off" },
          { name: "数据管理", path: "/data", icon: "el-icon-star-off",
            children: [{
              icon: "el-icon-star-off",
              name: "委托人管理",
              path: "/principal"
            }, {
              icon: "el-icon-star-off",
              name: "单位管理",
              path: "/entity"
            }, {
              icon: "el-icon-star-off",
              name: "验证项目管理",
              path: "/inspection",
              children: [{
                icon: "el-icon-star-off",
                name: "验证项目列表",
                path: "/inspection/list"
              }, {
                icon: "el-icon-star-off",
                name: "验证项目表单",
                path: "/inspection/form"
              }]
            }, {
              icon: "el-icon-star-off",
              name: "参与商管理",
              path: "/project",
              children: [{
                icon: "el-icon-star-off",
                name: "材料列表",
                path: "/project/list"
              }, {
                icon: "el-icon-star-off",
                name: "材料表单",
                path: "/project/form"
              }]
            }]
          }
      ]})
      resp.json({status: 'success', data: _result})
    }
  }).catch(err => next(new APIError(err)))
}

module.exports = { login, register, getAuthInfo };
