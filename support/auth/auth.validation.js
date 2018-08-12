const Joi = require('joi');

module.exports = {
  // POST /api/auth/login
  login: {
    body: {
      identity_type: Joi.string().required(),
      identifier: Joi.string().required(),
      credential: Joi.string().required()
    }
  },
  register: {
    body: {
      identity_type: Joi.string().required(),
      identifier: Joi.string().required(),
      credential: Joi.string().required()
    }
  }
};
