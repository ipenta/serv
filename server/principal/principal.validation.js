const Joi = require('Joi');
/**
 * 委托人信息
 */

module.exports = {
  // POST /api/auth/login
  principal: {
    body: {
      name: Joi.string().required(),
      phonenum: Joi.string().required()
    }
  }
};
