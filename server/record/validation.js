const Joi = require('joi');
/**
 * 单位信息(type:施工，监理，建设，监察)
 */

module.exports = {
  model: {
    body: {
      title: Joi.string().required(),
      project: Joi.array().required(),
      entity: Joi.array().required(),
      principal: Joi.array().required()
    }
  }
};
