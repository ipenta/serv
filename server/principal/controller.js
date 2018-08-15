const model = require('./model');
const APIError = require('../../utils/APIError');
const httpStatus = require('http-status');

const list = function (req, resp) {
  model.find()
    .then(result => {
      resp.json(result)
    }).catch(err => next(new APIError(err)))
}

const findById = function (req, resp, next) {
  model.findById(req.params.id)
    .then(result => {
      resp.json(result)
    }).catch(err => next(new APIError(err)))
}

const create = function (req, resp, next) {
  const query = req.body
  const queryItem = {phonenum:query.phonenum}
  model.findOne({ $or: [query,queryItem]})
    .then(result => {
      if (result) {
        const statusText = (result.name === query.name) ? '委托信息未作修改':'委托电话已被注册'
        const err = new APIError(statusText,httpStatus.CREATED, true);
        return next(err);
      }
    }).then(()=>{
      model.create(query).then(result => resp.json(result))
        .catch(err => new APIError(err))
    }).catch(err => next(new APIError(err)))
}

const patch = function (req, resp, next) {
  const query = req.body
  const queryItem = {phonenum:query.phonenum}
  model.find({ $or: [query,queryItem]})
    .then(result => {
      if (result) {
        consol.log(result.name,query.name)
        const statusText = (result.name === query.name) ? '委托信息未作修改':'委托电话已被注册'
        const err = new APIError(statusText,httpStatus.CREATED, true);
        return next(err);
      }else {
        model.update({ _id: req.params.id }, {$set:req.body} )
          .then(result => resp.json(result))
      }
    }).catch(err => next(new APIError(err)))
}

const remove = function (req, resp) {
  model.remove(req.params.id)
    .then(result => {
      resp.json(result)
    }).catch(err => next(new APIError(err)))
}

module.exports = {
  create,
  list,
  findById,
  patch,
  remove
};
