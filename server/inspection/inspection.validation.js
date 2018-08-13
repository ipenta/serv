const Joi = require('Joi');
/**
 * 检测项目信息
 */

module.exports = {
  inspection: {
    body: {
      type: Joi.string().required(),
      text: Joi.string().required(),
      price: Joi.string().required(),
      unit: Joi.string().required(),
      methods: Joi.object().required()
    }
  }
};
