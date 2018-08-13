const model = require('./model');
const APIError = require('../../utils/APIError');
const httpStatus = require('http-status');

const create = function (req, resp, next) {
  model.findOne(req.body)
    .then(result => {
      if (result) {
        const err = new APIError('已经存在',httpStatus.CONFLICT, true);
        return next(err);
      }else {
        model.create(req.body).catch(err => APIError(err))
          .then(result => resp.json(result))
      }
    }).catch(err => next(new APIError(err)))
}

const list = function (req, resp) {
  model.find()
    .then(result => {
      resp.json(result)
    }).catch(err => next(new APIError(err)))
}

const findById = function (req, resp) {
  model.findById(req.params.id)
    .then(result => {
      resp.json(result)
    }).catch(err => next(new APIError(err)))
}

const patch = function (req, resp) {

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
