const Joi = require('joi');
/**
 * 单位信息(type:施工，监理，建设，监察)
 */

module.exports = {
  model: {
    body: {
      name: Joi.string().required(),
      owner: Joi.object().keys({
        _id: Joi.string().required(),
        name: Joi.string().required()
      }),
      builder: Joi.object().keys({
        _id: Joi.string().required(),
        name: Joi.string().required()
      }),
      supervisor: Joi.object().keys({
        _id: Joi.string().required(),
        name: Joi.string().required()
      }),
      designer: Joi.object().keys({
        _id: Joi.string().required(),
        name: Joi.string().required()
      })
    }
  }
};
