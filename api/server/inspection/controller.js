const model = require('./model');
const APIError = require('../../utils/APIError');
const httpStatus = require('http-status');

const create = function (req, resp, next) {
  model.create(req.body)
    .then(result => resp.json({status: "success", data: result}))
    .catch(err => next(new APIError(err)))
}

const update = function (req, resp, next) {
  model.update({ _id: req.params.id }, {$set:req.body} )
    .then(result => resp.json({status: "success", data: result}))
    .catch(err => next(new APIError(err)))
}

const list = function (req, resp) {
  let text = req.query.text
  let query = {}
  if (text) {
    query = { text: eval('/'+text+'/i') }
  }
  model.find(query)
    .then(result => resp.json({status: "success", data: result}))
    .catch(err => next(new APIError(err)))
}

const findById = function (req, resp) {
  model.findById(req.params.id)
    .then(result => resp.json({status: "success", data: result}))
    .catch(err => next(new APIError(err)))
}

const remove = function (req, resp,next) {
  model.remove({_id : req.params.id})
    .then(result => resp.json({status: "success", data: result}))
    .catch(err => next(new APIError(err)))
}

module.exports = {
  create,
  list,
  findById,
  update,
  remove
};
