const model = require('./model');
const APIError = require('../../utils/APIError');
const httpStatus = require('http-status');

const create = function (req, resp, next) {
  return model.create(req.body).then(result => resp.json(result)).catch(err => next(new APIError(err)))
}

const update = function (req, resp, next) {
  return model.update({ _id: req.params.id }, {$set:req.body} ).then(result => resp.json(result)).catch(err => next(new APIError(err)))
}

const list = function (req, resp) {
  let name = req.query.name
  let query = {}
  if (name) {
    query = { text: eval('/'+name+'/i') }
  }
  model.find(query)
    .then(result => resp.json(result))
    .catch(err => next(new APIError(err)))
}

const findById = function (req, resp) {
  model.findById(req.params.id)
    .then(result => resp.json(result))
    .catch(err => next(new APIError(err)))
}

const remove = function (req, resp,next) {
  model.remove({_id : req.params.id})
    .then(result => resp.json(result))
    .catch(err => next(new APIError(err)))
}


module.exports = {
  create,
  list,
  findById,
  update,
  remove
};
