const Joi = require('Joi');

/**
 * 检测委托信息
 */

module.exports = {
  // POST /api/auth/login
  record: {
    body: {
      title: Joi.string().required(),
      project: Joi.array().required(),
      entity: Joi.array().required(),
      principal: Joi.array().required()
    }
  }
};
