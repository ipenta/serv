const Joi = require('joi');

module.exports = {
  // POST /api/auth/login
  findOneById: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      identifier : Joi.string().required()
    }
  }
};
