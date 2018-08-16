const model = require('./model');
const APIError = require('../../utils/APIError');
const httpStatus = require('http-status');

const create = function (req, resp, next) {
  _checkQuery(req, resp, next).then(()=>{
    return model.create(req.body).then(result => resp.json(result))
  }).catch(err => next(new APIError(err)))
}

const update = function (req, resp, next) {
  _checkQuery(req, resp, next).then(()=>{
    return model.update({ _id: req.params.id }, {$set:req.body} ).then(result => resp.json(result))
  }).catch(err => next(new APIError(err)))
}

const list = function (req, resp) {
  let name = req.query.name
  let query = {}
  if (name) {
    query = { name: eval('/'+name+'/i') }
  }
  model.find(query)
    .then(result => resp.json(result))
    .catch(err => next(new APIError(err)))
}

const findById = function (req, resp, next) {
  model.findById(req.params.id)
    .then(result => resp.json(result))
    .catch(err => next(new APIError(err)))
}

const remove = function (req, resp,next) {
  model.remove({_id : req.params.id})
    .then(result => resp.json(result))
    .catch(err => next(new APIError(err)))
}

const _checkQuery = function (req,resp,next) {
  const query = req.body
  const queryItem = {name:query.name}
  return model.findOne({ $or: [query,queryItem]})
    .then(result => {
      if (result) {
        const statusText = (result.name === query.name) ? '委托信息未作修改':'委托电话已被注册'
        const err = new APIError(statusText,httpStatus.CREATED, true);
        return next(err);
      }
    })
}

module.exports = {
  create,
  list,
  findById,
  update,
  remove
};
