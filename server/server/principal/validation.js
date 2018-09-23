const Joi = require('joi');
/**
 * 单位信息(type:施工，监理，建设，监察)
 */

module.exports = {
  post: {
    body: {
      name: Joi.string().required(),
      phonenum: Joi.string().required()
    }
  },
  patch: {
    params: {
      id: Joi.string().required()
    },
    body: {
      name: Joi.string().required(),
      phonenum: Joi.string().required()
    }
  }
};
