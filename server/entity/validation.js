const Joi = require('joi');
/**
 * 单位信息(type:施工，监理，建设，监察)
 */

module.exports = {
  model: {
    body: {
      type: Joi.string().required(),
      name: Joi.string().required()
    }
  }
};
